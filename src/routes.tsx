import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from '../src/pages/User/Register';
import Home from './pages/Home';
import Login from './pages/User/Login';


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