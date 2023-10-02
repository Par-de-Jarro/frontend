import React from 'react'
import { CardsContainer, Title, LoggedInUserContainer, LoggedOffUserContainer, UserImage, UserInfoContainer, UserName, Button, RedirectLink, LogOutButton } from './styles'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import NavCard from '../../components/nav-card'
import { BsHouses } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'
import { FaMoneyBillWave } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

const UserPage: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();

  const logOut = () => {
    signOut()
    navigate('/')
  }

  return (
      <>
        <PageContainer>
          <Title>Perfil</Title>
          { user && (
              <LoggedInUserContainer to='/user/profile'>
                <UserImage src={user.profile_img}/>
                  <UserInfoContainer>
                      <UserName>{user.name}</UserName>
                      Mostrar Perfil
                  </UserInfoContainer>
              </LoggedInUserContainer>
            )
          }
          { !user && (
              <LoggedOffUserContainer>
                <Button to='/signIn'>Entrar</Button>
                Você ainda não tem conta? <RedirectLink to='/signUp'>Cadastrar-se</RedirectLink>
              </LoggedOffUserContainer>
            )
          }
          <CardsContainer>
            <Title>Configurações</Title>
            <NavCard label='Meu Perfil' redicted_to='/user/profile'>
              <PiUserCircleFill />
            </NavCard>
            <NavCard label='Minhas Contas' redicted_to='/'>
              <FaMoneyBillWave/>
            </NavCard>
            <NavCard label='Meus Locais' redicted_to='/'>
              <BsHouses/>
            </NavCard>
            {
              user && (
                <LogOutButton onClick={logOut}>
                  Deslogar
                </LogOutButton>
              )
            }
          </CardsContainer>
        </PageContainer>
        <NavBar/>
      </>
    )



}

export default UserPage
