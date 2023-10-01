import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/search'
import UserPage from './pages/user'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
