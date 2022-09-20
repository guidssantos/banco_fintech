import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import Base from '../pages/Base';
import RouteWrapper from './Route';
import { Register } from './Register';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
      <Route
        path="/login"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<Login />}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<Register />}
          />
        }
      />
      <Route
        path="/login/dashboard"
        element={
          <RouteWrapper
            loggedComponent={<Dashboard />}
            defaultComponent={<Login />}
            isPrivate
          />
        }
      />
    </Routes>
  );
}
