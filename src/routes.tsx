import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from '../src/pages/user/register';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}