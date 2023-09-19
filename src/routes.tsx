import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from './pages/User/Register';
import UserLogin from './pages/User/Login';
import Home from './pages/Home';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}