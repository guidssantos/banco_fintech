import { Home } from 'pages/Home';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
