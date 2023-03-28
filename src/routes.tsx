import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<h1>Login</h1>} />
    </Routes>
  );
}
