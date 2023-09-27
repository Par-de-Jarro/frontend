import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/search';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}