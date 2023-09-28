import React, {
  createContext, useCallback, useState, useContext, type ReactNode
} from 'react'
import api from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({ } as AuthContextData)
interface AuthProps {
  children: ReactNode
}
const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ParDeJarro:token')
    const user = localStorage.getItem('@ParDeJarro:user')

    if (token && user) {
      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/session/', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@ParDeJarro:token', token)
    localStorage.setItem('@ParDeJarro:user', JSON.stringify(user))

    setData({ user, token })
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
