import React from 'react'
import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import { UserImage, Title, MainDiv, AboutSection, SubInfo, UniIcon, CourseIcon, GenderIcon, AgeIcon } from './styles'
import UserPic from '../../styles/assets/User.jpg'
import { useNavigate } from 'react-router-dom'


const UserPage: React.FC = () => {
  const navigate = useNavigate();

  return (
      <>
        <MainDiv>
          <UserImage src={UserPic}/>
          <Title>User name</Title>
        </MainDiv>
        <PageContainer>
            <AboutSection>
                <p>Sobre</p>
                <p>descrição descrição descrição</p>
            </AboutSection>
            <SubInfo>
              <GenderIcon></GenderIcon>
              <p>Genero x</p>
            </SubInfo>
            <SubInfo>
              <AgeIcon></AgeIcon>
              <p>Idade x</p>
            </SubInfo>
            <SubInfo>
              <UniIcon></UniIcon>
              <p>Universidade x</p>
            </SubInfo>
            <SubInfo>
              <CourseIcon></CourseIcon>
              <p>Curso x</p>
            </SubInfo>
            <div>Contato</div>
        </PageContainer>
        <NavBar/>
      </>
    )
}

export default UserPage