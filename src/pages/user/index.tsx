import React from 'react'
import { UserContainer, UserImage, UserInfoContainer, UserName } from './styles'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'

const UserPage: React.FC = () => (
  <>
    <PageContainer>
      <UserContainer>
        <UserImage src='https://avatars.githubusercontent.com/u/38543529?v=4'/>
        <UserInfoContainer>
            <UserName>Antonio Neto</UserName>
            Mostrar Perfil
        </UserInfoContainer>
      </UserContainer>
    </PageContainer>
    <NavBar/>
  </>
)

export default UserPage
