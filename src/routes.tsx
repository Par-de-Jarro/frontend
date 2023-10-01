import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/search'
import UserPage from './pages/user'
import SignIn from './pages/signIn'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/signIn" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  )
}
