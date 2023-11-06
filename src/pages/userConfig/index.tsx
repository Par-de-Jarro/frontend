import React, { useState, useEffect } from 'react'
import { CardsContainer, Title, LoggedInUserContainer, LoggedOffUserContainer, UserImage, UserInfoContainer, UserName, Button, RedirectLink, LogOutButton } from './styles'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import NavCard from '../../components/nav-card'
import { BsHouses } from 'react-icons/bs'
import { FaMoneyBillWave } from 'react-icons/fa'
import { RiBillLine } from 'react-icons/ri'
import { PiUserCircleFill } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import UserPic from '../../styles/assets/User.jpg'
import { User } from '../../types/user'

const UserConfigPage: React.FC = () => {
  const { user, signOut, isTokenExpired } = useAuth()

  const [loggedUser, setLoggedUser] = useState<User | undefined>(user)

  const navigate = useNavigate();

  const logOut = () => {
    signOut()
    navigate('/')
  }

  const signOutIfTokenIsExpired = () => {
    if(isTokenExpired()) {
      signOut()
      setLoggedUser(undefined)
    }
  }

  useEffect(() => {
    signOutIfTokenIsExpired()
  }, [])
 

  return (
      <>
        <PageContainer>
          <Title>Perfil</Title>
          { loggedUser && (
              <LoggedInUserContainer to='/user/profile'>
                <UserImage src={loggedUser.profile_img || UserPic}/>
                  <UserInfoContainer>
                      <UserName>{loggedUser.name}</UserName>
                      Mostrar Perfil
                  </UserInfoContainer>
              </LoggedInUserContainer>
            )
          }
          { !loggedUser && (
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
            <NavCard label='Solicitações' redicted_to='/spotRequests'>
              <MdOutlineMailOutline/>
            </NavCard>
            <NavCard label='Meus Locais' redicted_to='/mySpots/'>
              <BsHouses/>
            </NavCard>
            <NavCard label='Contas de local' redicted_to='/spotBill/list'>
              <RiBillLine/>
            </NavCard>
            <NavCard label='Cotas' redicted_to='/spotBill/quota'>
              <FaMoneyBillWave/>
            </NavCard>
            {
              loggedUser && (
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
