import React from 'react';
import { Container, NavButton, UserIcon, SearchIcon, BillsIcon, HouseIcon } from './styles';

const Header: React.FC = () => (
  <Container>
    <NavButton isSelected={true}><UserIcon/></NavButton>
    <NavButton><SearchIcon/></NavButton>
    <NavButton><BillsIcon/></NavButton>
    <NavButton><HouseIcon/></NavButton>
  </Container>
);

export default Header;