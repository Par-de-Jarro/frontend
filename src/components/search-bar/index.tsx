import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, Input, SearchButton, FilterButton } from './styles'
const SearchBar: React.FC = () => (
  <Container>
    <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
    <Input apiKey='AIzaSyDQbB1_en_7z_dMNIieyZ6uEnVNk931Ob4' options={{ types: ['(places)'], componentRestrictions: { country: 'br' } }} onPlaceSelected={(place) => { console.log(place) }} placeholder='Qualquer Lugar'/>
    <SearchButton><FaSearch color='#513422'/></SearchButton>
  </Container>
)

export default SearchBar
