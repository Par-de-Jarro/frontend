import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from '../src/pages/user/register';
import Home from './pages/home';
import Login from './pages/login';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}