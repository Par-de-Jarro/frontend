import React from 'react';
import { Container, StyledSearchBar, Logo} from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo to='/'>🪴 Par de Jarro</Logo>
    <StyledSearchBar/>
  </Container>
);

export default Header;