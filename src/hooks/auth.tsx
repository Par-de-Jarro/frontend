import React, {
  createContext, useCallback, useState, useContext, type ReactNode
} from 'react'
import api from '../services/api'

export interface User {
  name: string
  email: string
  cellphone: string
  document_id: string
  profile_img: string
  birthdate: string
  course: string
  bio: string
  gender: string
  id_user: string
  university: University
}

export interface University {
  name: string
  slug: string
  lat: number
  long: number
  id_university: string
}
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
    const response = await api.post('/session/', {
      email,
      password
    })

    const { access_token, user } = response.data

    localStorage.setItem('@ParDeJarro:token', access_token)
    localStorage.setItem('@ParDeJarro:user', JSON.stringify(user))

    setData({ user, access_token })
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
