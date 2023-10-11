import React, { type ReactNode } from 'react'
import { AuthProvider } from './auth'
import { SpotsProvider } from './spots'

interface AppProviderProps {
  children: ReactNode
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <SpotsProvider>
      {children}
    </SpotsProvider>
  </AuthProvider>
)

export default AppProvider
