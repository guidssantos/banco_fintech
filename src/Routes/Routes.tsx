import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import Base from '../pages/Base';
// import your route components too

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
