import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Spot } from '../types/spot';
import api from '../services/api';
import { useAuth } from './auth';

interface Filters {
  lat: number;
  long: number;
  local_name: string
}

interface SpotContextData {
  spots: Spot[];
  loadSpots: () => void;
  filters: Filters,
  setFilters: (a: any) => void;
  loadingSpots: boolean;
}

const SpotContext = createContext<SpotContextData | undefined>(undefined);

export function SpotsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [loadingSpots, setLoadingSpots] = useState<boolean>(false);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [filters, setFilters] = useState<Filters>(() => {
    let lat =  -7.2171368
    let long =  -35.9097543
    let local_name = 'UFCG - Campus Campina Grande'

    if (user) {
      lat = user.university.lat
      long = user.university.long
      local_name = user.university.name
    }

    return { lat, long, local_name }
  })

  const loadSpots = async () => {
    try {      
      setLoadingSpots(true);
      
      const response = await api.get('/spot/search', {
        params: {
          lat: filters?.lat,
          long: filters?.long,
        },
      });
      const spots: Spot[] = response?.data;
      setSpots(spots);
    } finally {
      setLoadingSpots(false);
    }
  };


  const value: SpotContextData = {
    loadingSpots,
    spots,
    loadSpots,
    filters,
    setFilters
  };

  return <SpotContext.Provider value={value}>{children}</SpotContext.Provider>;
}

export function useSpots() {
  const context = useContext(SpotContext);

  if (!context) {
    throw new Error('useSpots must be used within a SpotsProvider');
  }

  return context;
}
