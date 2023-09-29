import React, {
  useCallback,
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  useState
} from 'react'
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

interface Spot {
  name: string
  description: string
  personal_quota: number
  images: Image[]
  type: string
  value: number
  lat: number
  long: number
  street: string
  zip_code: string
  number: string
  complement: string
  city: string
  state: string
  key: Key
  id_spot: string
  owner: Owner
  distance: number
}

interface Image {
  image_url: string
  image_order: number
}

interface Key {
  convenience: Convenience
  allowance: Allowance
}

interface Convenience {
  rooms_quantity: number
  bathrooms_quantity: number
  has_elevator: boolean
}

interface Allowance {
  allow_pet: boolean
  allow_smoker: boolean
}

interface Owner {
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

interface University {
  name: string
  slug: string
  lat: number
  long: number
  id_university: string
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
