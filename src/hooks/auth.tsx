import React, {
  createContext, useCallback, useState, useContext, type ReactNode
} from 'react'
import api from '../services/api'
import { User } from '../types/user'

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
}

const AuthContext = createContext<AuthContextData>({ } as AuthContextData)
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
      alert('Unable to login')
      console.error("Login failed: ", error)
    })

    

    
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@ParDeJarro:token')
    localStorage.removeItem('@ParDeJarro:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth (): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used withing an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
