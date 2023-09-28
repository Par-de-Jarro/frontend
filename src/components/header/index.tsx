import React from 'react';
import { Container } from './styles';
import SearchBar from '../search-bar';
const Header: React.FC = () => (
  <Container>
    <SearchBar/>
  </Container>
);

export default Header;