import React from 'react'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import { UserImage, Title, MainDiv, AboutSection } from './styles'
import UserPic from '../../styles/assets/User.jpg'
import { useNavigate } from 'react-router-dom'


const UserPage: React.FC = () => {
  const navigate = useNavigate();

  return (
      <>
        <PageContainer>
            <MainDiv>
                <UserImage src={UserPic}/>
                <Title>User name</Title>
            </MainDiv>
            <AboutSection>
                <p>Sobre</p>
                <p>descrição descrição descrição</p>
            </AboutSection>
        </PageContainer>
        <NavBar/>
      </>
    )
}

export default UserPage