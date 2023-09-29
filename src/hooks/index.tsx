import React, { type ReactNode } from 'react'
import { AuthProvider } from './auth'
import { SpotsProvider } from './spots'
import { FiltersProvider } from './useFilters'

interface AppProviderProps {
  children: ReactNode
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <FiltersProvider>
      <SpotsProvider>
        {children}
      </SpotsProvider>
    </FiltersProvider>
  </AuthProvider>
)

export default AppProvider
