import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

type LoginProps = {
  children?: JSX.Element;
};

type AuthContextProps = {
  logout(): Promise<void>;
  signed: boolean;
  user: null;
  loading: boolean;
  login(email, password): Promise<void>;
  register(name, email, password): Promise<void>;
  loadingAuth: boolean;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  storageUser: (data: any) => void;
};

function AuthProvider({ children }: LoginProps) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('BancoUser');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  //fazendo login
  async function login(email, password) {
    setLoadingAuth(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid;

        const userProfile = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();

        const data = {
          uid: uid,
          name: userProfile.data().name,
          email: value.user.email,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  //register a new user
  async function register(email, password, name) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid;

        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            name: name,
          })
          .then(() => {
            const data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem('BancoUser', JSON.stringify(data));
  }

  // logout
  async function logout() {
    await firebase.auth().signOut();
    localStorage.removeItem('BancoUser');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        login,
        register,
        logout,
        loadingAuth,
        setUser,
        storageUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
