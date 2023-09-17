import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from '../src/pages/user/register';
import Home from './pages/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}