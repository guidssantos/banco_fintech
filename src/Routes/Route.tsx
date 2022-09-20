import { useContext } from 'react';

import { Navigate } from 'react-router-dom'; //Agora utilizamos Navigate para redirecionar a página para o local desejado.

import { AuthContext } from '../contexts/auth';

type RouteWrapperProps = {
  loggedComponent?: JSX.Element;
  defaultComponent?: JSX.Element;
  isPrivate?: boolean;
};

export default function RouteWrapper({
  loggedComponent,
  defaultComponent,
  isPrivate,
}: RouteWrapperProps) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <span>Carregando...</span>
      </div>
    );
  }

  if (signed && !isPrivate) {
    return <Navigate to="/login/dashboard" />; //direciona para página privada.
  } else if (!signed && isPrivate) {
    return <Navigate to="/login" />; //direciona para página inicial.
  }

  return signed ? loggedComponent : defaultComponent;
}
