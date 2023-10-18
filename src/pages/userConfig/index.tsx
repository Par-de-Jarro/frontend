import React from 'react'
import { CardsContainer, Title, LoggedInUserContainer, LoggedOffUserContainer, UserImage, UserInfoContainer, UserName, Button, RedirectLink, LogOutButton } from './styles'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import NavCard from '../../components/nav-card'
import { BsHouses } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import UserPic from '../../styles/assets/User.jpg'

const UserConfigPage: React.FC = () => {
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
                <UserImage src={user.profile_img || UserPic}/>
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
            <NavCard label='Solicitações' redicted_to='/'>
              <MdOutlineMailOutline/>
            </NavCard>
            <NavCard label='Meus Locais' redicted_to='/mySpots/'>
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

export default UserConfigPage
