import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import Base from '../pages/Base';
import RouteWrapper from './Route';
import { Register } from './Register';
import { Settings } from './Settings';

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
      <Route
        path="/login/dashboard/settings"
        element={
          <RouteWrapper
            loggedComponent={<Settings />}
            defaultComponent={<Login />}
            isPrivate
          />
        }
      />
    </Routes>
  );
}
