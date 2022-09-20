import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAD_mWf1TCwLRES6EIjaIj0PacfixMmKiU',
  authDomain: 'banco-e-finance.firebaseapp.com',
  projectId: 'banco-e-finance',
  storageBucket: 'banco-e-finance.appspot.com',
  messagingSenderId: '983767660503',
  appId: '1:983767660503:web:095781a10140f4739f7d92',
  measurementId: 'G-S7256068QS',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
