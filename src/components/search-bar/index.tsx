import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, Input, SearchButton, FilterButton } from './styles'

import { useSpots } from '../../hooks/spots'
const SearchBar: React.FC = () => {
  const spots = useSpots()

  useEffect(() => {
    spots.loadSpots()
  },[])

  const recommendations = [{"description":"UFCG - Campus Campina Grande - Rua Aprígio Veloso - Universitário, Campina Grande - State of Paraíba, Brazil","term":"UFCG - Campus Campina Grande"},{"description":"UFCG, Universidade Federal de Campina Grande - Campus Cajazeiras-PB - Rua Sérgio Moreira de Figueiredo - Populares, Cajazeiras - State of Paraíba, Brazil","term":"UFCG, Universidade Federal de Campina Grande - Campus Cajazeiras-PB"},{"description":"UFCG - Avenida Universitária - Santa Cecilia, Patos - State of Paraíba, Brazil","term":"UFCG"},{"description":"UFCG - Campus Cuité - Cuité, State of Paraíba, Brazil","term":"UFCG - Campus Cuité"},{"description":"UFCG - Rua Sinfrônio Nazaré - Centro, Sousa - State of Paraíba, Brazil","term":"UFCG"}]

  return (
    <Container>
      <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
      <Input recommendations={recommendations} onSelectLocation={(location) => console.log(location)}></Input>
      <SearchButton><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
