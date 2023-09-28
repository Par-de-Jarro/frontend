import React, {
  useCallback,
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  useEffect,
} from 'react';
import api from '../services/api';


type SpotsProviderProps = {
  children: ReactNode;
};

type SpotContextData = {
  loadingSpots: boolean;
  spots: Array<Spot>;
  loadSpots(): void
};

type Spot ={
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

type Image = {
  image_url: string
  image_order: number
}

type Key = {
  convenience: Convenience
  allowance: Allowance
}

type Convenience = {
  rooms_quantity: number
  bathrooms_quantity: number
  has_elevator: boolean
}

type Allowance = {
  allow_pet: boolean
  allow_smoker: boolean
}

type Owner = {
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

type University = {
  name: string
  slug: string
  lat: number
  long: number
  id_university: string
}


const SpotContext = createContext<SpotContextData>({} as SpotContextData);

function SpotsProvider({ children }: SpotsProviderProps) {
  const [loadingSpots, setLoadingSpots] = useState<boolean>(false);
  const [spots, setSpots] = useState<Array<Spot>>([]);

  const getSpots = async () => {
    setLoadingSpots(true);

    const response = await api.get('/spot/search', {
      params : {
        lat: -7.2171368,
        long: -35.9097543 
      }
    });
    
    const orders: Record<string, Spot[]> = response?.data;

    setLoadingSpots(false);
    setSpots(orders?.PLACED ?? []);
  };

  const loadSpots = useCallback(async (): Promise<void> => {
    await getSpots();
  }, []);

  const value = useMemo(
    () => ({
      loadingSpots,
      spots,
      loadSpots
    }),
    [spots, loadingSpots, loadSpots],
  );


  useEffect(() => {
    loadSpots()
  }, []);

  return (
    <SpotContext.Provider value={value}>{children}</SpotContext.Provider>
  );
}

function useSpots(): SpotContextData {
  const context = useContext(SpotContext);

  if (!context) {
    throw new Error('useSpots must be used withing an SpotsProvider');
  }

  return context;
}

export { SpotsProvider, useSpots };