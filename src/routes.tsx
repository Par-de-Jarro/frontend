import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/search'
import UserConfigPage from './pages/userConfig'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import AddSpot from './pages/spot'
import AddSpotImage from './pages/spot/image'
import UserProfile from './pages/userProfile'
import UserPage from './pages/user'
import SpotDetails from './pages/spotDetails'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/userConfig" element={<UserConfigPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/spot" element={<AddSpot />} />
        <Route path="/spot_image/:id" element={<AddSpotImage />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/spots/:id" element={<SpotDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
