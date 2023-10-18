import React from 'react'
import { Container, StyledSearchBar, NavIcon, UserIcon, UserNavIcon, Div } from './styles'

const Header: React.FC = () => {  

  return (
    <Container>
      <NavIcon to='/'>🪴 Par de Jarro</NavIcon>
      <StyledSearchBar/>
      <Div>
        <UserNavIcon to='/userConfig'><UserIcon/></UserNavIcon>
      </Div>
    </Container>
  )
}

export default Header
