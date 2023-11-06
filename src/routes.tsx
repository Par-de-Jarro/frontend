import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/search'
import UserConfigPage from './pages/userConfig'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import UserProfile from './pages/userProfile'
import UserPage from './pages/user'
import SpotDetails from './pages/spotDetails'
import Spots from './pages/userSpots'
import AddSpot from './pages/spot'
import SpotRequests from './pages/spotRequests'
import { useAuth } from './hooks/auth'
import { ProtectedRouteProps } from './protectedRoutes'
import ProtectedRoute from './protectedRoutes'
import CreateSpotBill from './pages/spotBill/create'
import LoadSpotBill from './pages/spotBill/load'
import ListSpotBill from './pages/spotBill/list'
import QuotaList from './pages/quota/list'


export default function AppRoutes() {

  const { user, isTokenExpired } = useAuth()

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: user != null && !isTokenExpired(),
    authenticationPath: '/signIn',
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/userConfig" element={<UserConfigPage />} />
        <Route path="/user/:id" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserPage />} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user/profile" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserProfile />} />} />
        <Route path="/userSpots" element={<Spots />} />
        <Route path="/spot" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AddSpot />} />} />
        <Route path="/spotRequests" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<SpotRequests />} />} />
        <Route path="/mySpots" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Spots />} />} />
        <Route path="/spots/:id" element={<SpotDetails />} />
        <Route path=":id/spotBill/create" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<CreateSpotBill />} />} />
        <Route path="/spotBill/:id" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<LoadSpotBill />} />} />
        <Route path="/spotBill/list" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ListSpotBill />} />} />
        <Route path="/spotBill/quota" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<QuotaList />} />} />
      </Routes>
    </BrowserRouter>
  )
}
