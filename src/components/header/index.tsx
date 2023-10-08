import React from 'react'
import { Container, StyledSearchBar, NavIcon, UserIcon, UserNavIcon } from './styles'


const Header: React.FC = () => {  
  return (
    <Container>
      <NavIcon to='/'>🪴 Par de Jarro</NavIcon>
        <StyledSearchBar/>
      <UserNavIcon to='/userConfig'><UserIcon/></UserNavIcon>
    </Container>
  )
}

export default Header
