import React from 'react'
import { Container, StyledSearchBar, NavIcon, UserIcon, UserNavIcon, Button, Div } from './styles'
import { BsHouses } from 'react-icons/bs'
import { useAuth } from '../../hooks/auth'


const Header: React.FC = () => {  
  const { user } = useAuth()

  return (
    <Container>
      <NavIcon to='/'>🪴 Par de Jarro</NavIcon>
      <StyledSearchBar/>
      <Div>
        { user && <Button to='/spot'><BsHouses/></Button> }
        <UserNavIcon to='/userConfig'><UserIcon/></UserNavIcon>
      </Div>
    </Container>
  )
}

export default Header
