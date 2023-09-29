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

  return (
    <Container>
      <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
      <Input onSelectLocation={(location) => console.log(location)}></Input>
      {/* <Input 
          apiKey='AIzaSyCLK9gM38YaYXZckB0oFNhZWTMpjIKHvhY'
          selectProps={{ placeholder: 'Qualquer Lugar' }}
          apiOptions={{ language: 'pt-br', region: 'br' }}
      /> */}
      <SearchButton><FaSearch color='#513422'/></SearchButton>
    </Container>
  )

}


  

export default SearchBar
