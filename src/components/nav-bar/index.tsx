import React from 'react'
import { Container, NavButton, UserIcon, SearchIcon, BillsIcon, HouseIcon } from './styles'

const NavBar: React.FC = () => (
  <>
    <Container>
      <NavButton to='/'><SearchIcon /></NavButton>
      <NavButton to='/spotBill/list'><BillsIcon /></NavButton>
      <NavButton to='/userSpots'><HouseIcon /></NavButton>
      <NavButton to='/userConfig'><UserIcon /></NavButton>
    </Container>

  </>
)

export default NavBar
