import React from 'react'
import { Container, NavButton, UserIcon, SearchIcon, BillsIcon, HouseIcon } from './styles'

const NavBar: React.FC = () => (
  <>
    <Container>
      <NavButton to='/'><SearchIcon/></NavButton>
      <NavButton to='/bills'><BillsIcon/></NavButton>
      <NavButton to='/spot'><HouseIcon/></NavButton>
      <NavButton to='/user'><UserIcon/></NavButton>
    </Container>

  </>
)

export default NavBar
