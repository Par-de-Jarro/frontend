import React, {
  createContext, useCallback, useState, useContext, type ReactNode
} from 'react'
import api from '../services/api'
import { User } from '../types/user'
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
interface AuthState {
  access_token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  isTokenExpired: () => boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
interface AuthProps {
  children: ReactNode
}
const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const access_token = localStorage.getItem('@ParDeJarro:token')
    const user = localStorage.getItem('@ParDeJarro:user')

    if (access_token && user) {
      return {
        access_token,
        user: JSON.parse(user)
      }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    await api.post('/session/', {
      email,
      password
    })
      .then((response) => {
        const { access_token, user } = response.data

        localStorage.setItem('@ParDeJarro:token', access_token)
        localStorage.setItem('@ParDeJarro:user', JSON.stringify(user))

        setData({ user, access_token })
      })
      .catch((error) => {
        toast.error('Não foi possivel realizar o login')
        console.error("Login failed: ", error)
      })

  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@ParDeJarro:token')
    localStorage.removeItem('@ParDeJarro:user')

    setData({} as AuthState)
  }, [])



  const isTokenExpired = (): boolean => {
    const access_token = localStorage.getItem('@ParDeJarro:token');

    if (access_token) {
      const decodedToken = jwtDecode<JwtPayload>(access_token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp && currentTime > decodedToken.exp) {
        localStorage.clear();
        return true;
      } else {
        return false;
      }
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, isTokenExpired }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used withing an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
