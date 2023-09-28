import React from 'react';
import { FaSearch } from 'react-icons/fa'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { Container, Input, SearchButton, FilterButton } from './styles';
const SearchBar: React.FC = () => (
  <Container>
    <FilterButton><TbAdjustmentsHorizontal color='#513422'/></FilterButton>
    <Input placeholder='Qualquer Lugar'/>
    <SearchButton><FaSearch color='#513422'/></SearchButton>
  </Container>
);

export default SearchBar;