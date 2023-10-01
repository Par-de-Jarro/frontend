import React from 'react'
import { CardsContainer, Title, LoggedInUserContainer, LoggedOffUserContainer, UserImage, UserInfoContainer, UserName, Button, RedirectLink } from './styles'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import NavCard from '../../components/nav-card'
import { BsHouses } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'
import { FaMoneyBillWave } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'

const UserPage: React.FC = () => {
  const { user } = useAuth()

  return (
      <>
        <PageContainer>
          <Title>Perfil</Title>
          { user && (
              <LoggedInUserContainer to='/'>
                <UserImage src='https://avatars.githubusercontent.com/u/38543529?v=4'/>
                  <UserInfoContainer>
                      <UserName>Antonio Neto</UserName>
                      Mostrar Perfil
                  </UserInfoContainer>
              </LoggedInUserContainer>
            )
          }
          { !user && (
              <LoggedOffUserContainer>
                <Button to=''>Entrar</Button>
                Você ainda não tem conta? <RedirectLink to='/signUp'>Cadastrar-se</RedirectLink>
              </LoggedOffUserContainer>
            )
          }
          <CardsContainer>
            <Title>Configurações</Title>
            <NavCard label='Meu Perfil' redicted_to='/'>
              <PiUserCircleFill />
            </NavCard>
            <NavCard label='Minhas Contas' redicted_to='/'>
              <FaMoneyBillWave/>
            </NavCard>
            <NavCard label='Meus Locais' redicted_to='/'>
              <BsHouses/>
            </NavCard>
          </CardsContainer>
        </PageContainer>
        <NavBar/>
      </>
    )



}

export default UserPage
