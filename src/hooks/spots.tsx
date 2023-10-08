import React, {
  useCallback,
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  useState
} from 'react'

import { Spot } from '../types/spot'
import api from '../services/api'
interface SpotsProviderProps {
  children: ReactNode
}
interface PossibleFilters {
  lat: number
  long: number
}
interface SpotContextData {
  loadingSpots: boolean
  spots: Spot[]
  loadSpots: (possible_filters: PossibleFilters) => void
}

const SpotContext = createContext<SpotContextData>({} as SpotContextData)

function SpotsProvider ({ children }: SpotsProviderProps) {

  const [loadingSpots, setLoadingSpots] = useState<boolean>(false)
  const [spots, setSpots] = useState<Spot[]>([])

  const getSpots = async (possible_filters: PossibleFilters) => {
    const response = await api.get('/spot/search', {
      params: {
        lat: possible_filters.lat,
        long: possible_filters.long
      }
    })

    const spots: Spot[] = response?.data

    setLoadingSpots(false)
    setSpots(spots)
  }

  const loadSpots = useCallback(async (possible_filters: PossibleFilters): Promise<void> => {
    await getSpots(possible_filters);
  }, []);

  const value = useMemo(
    () => ({
      loadingSpots,
      spots,
      loadSpots
    }),
    [spots, loadingSpots, loadSpots]
  )

  return (
    <SpotContext.Provider value={value}>{children}</SpotContext.Provider>
  )
}

function useSpots (): SpotContextData {
  const context = useContext(SpotContext)

  if (!context) {
    throw new Error('useSpots must be used withing an SpotsProvider')
  }

  return context
}

export { SpotsProvider, useSpots }
