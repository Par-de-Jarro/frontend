import React from 'react';
import { Container, StyledSearchBar, Logo} from './styles';
import { isDesktop } from '../../utils/window';

const Header: React.FC = () => (
  <Container>
    { isDesktop ? <Logo to='/'>🪴 Par de Jarro</Logo> : null}
    <StyledSearchBar/>
  </Container>
);

export default Header;