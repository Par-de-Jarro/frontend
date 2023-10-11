import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/search'
import UserConfigPage from './pages/userConfig'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import UserProfile from './pages/userProfile'
import UserPage from './pages/user'
import SpotDetails from './pages/spotDetails'
import Spots from './pages/spots'
import AddSpot from './pages/spot'

import MySpot from './pages/mySpot'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/userConfig" element={<UserConfigPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/userSpots" element={<Spots />} />
        <Route path="/spot" element={<AddSpot />} />
        <Route path="/mySpot" element={<MySpot />} />
        <Route path="/spots/:id" element={<SpotDetails />} />

      </Routes>
    </BrowserRouter>
  )
}
