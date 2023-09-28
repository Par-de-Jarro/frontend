import React from 'react';
import { Container, NavButton, UserIcon, SearchIcon, BillsIcon, HouseIcon } from './styles';
import { isDesktop } from '../../utils/window';

const NavBar: React.FC = () => (
  <>
  {
  !isDesktop ? 
  (
    <Container>
      <NavButton isSelected={true}><UserIcon/></NavButton>
      <NavButton><SearchIcon/></NavButton>
      <NavButton><BillsIcon/></NavButton>
      <NavButton><HouseIcon/></NavButton>
    </Container>
  ) 
    : null
  }
  </>
);

export default NavBar;