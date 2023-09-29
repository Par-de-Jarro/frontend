import React, {
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  useState
} from 'react'

interface FiltersProviderProps {
  children: ReactNode
}

interface FiltersContextProps {
  coordinates: Coordinates
  setCoordinates(coordinates: Coordinates): void
}

interface Coordinates {
  latitude: number
  longitude: number
}

const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps)

function FiltersProvider ({ children }: FiltersProviderProps) {
  const [coordinates, setCoordinates] = useState<Coordinates>(
    {
      latitude: -7.2171368, // UFCG COORDINATES
      longitude: -35.9097543
    } as Coordinates
  )

  const value = useMemo(
    () => ({
      coordinates,
      setCoordinates,
    }),
    [coordinates]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

function useFilters (): FiltersContextProps {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters must be used withing an FiltersProvider')
  }

  return context
}

export { FiltersProvider, useFilters }
