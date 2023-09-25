import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from '../src/pages/user/register';
import Home from './pages/home';
import EditUser from './pages/user/edit';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}