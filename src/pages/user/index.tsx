/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import NavBar from '../../components/nav-bar'
import PageContainer from '../../components/page-container'
import { UserImage, Title, MainDiv, AboutSection, SubInfo, BackIcon, FirstElement, UniIcon, CourseIcon, GenderIcon, AgeIcon, ContactDiv, EmailIcon, PhoneIcon } from './styles'
import UserPic from '../../styles/assets/User.jpg'

import api from '../../services/api';

import { User } from '../../types/user'
import { useAuth } from '../../hooks/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const UserPage: React.FC = () => {
  const { isTokenExpired, signOut } = useAuth()

  const [user, SetUser] = useState<User>()
  const navigate = useNavigate();
  const { id } = useParams();

  const genderMap = new Map([
    ['male', 'Masculino'],
    ['female', 'Feminino'],
    ['non-binary', 'Não binário'],
    ['uninformed', 'Não informado']
  ]);

  const getSpot = () => {
    api.get(`/user/${id}`).then((response) => {
      const user: User = response?.data
      try {
        SetUser(user)
      }
      catch {
        toast.error("Algo de errado ocorreu na sua solicitação")
      }
    })
  }

  const signOutIfTokenIsExpired = () => {
    if (isTokenExpired()) {
      signOut()
      navigate('/signIn')
    }
  }

  useEffect(() => {
    signOutIfTokenIsExpired()
    getSpot()
  }, [])

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <MainDiv>
        <FirstElement>
          <BackIcon onClick={goBack}></BackIcon>
        </FirstElement>
        <UserImage src={user?.profile_img || UserPic} />
        <Title>{user?.name}</Title>
      </MainDiv>
      <PageContainer>
        <AboutSection>
          <p>Sobre</p>
          <p>{user?.bio}</p>
        </AboutSection>
        <SubInfo>
          <GenderIcon></GenderIcon>
          <p>{genderMap.get(user?.gender || 'Não informado')}</p>
        </SubInfo>
        <SubInfo>
          <AgeIcon></AgeIcon>
          <p>{user?.birthdate}</p>
        </SubInfo>
        <SubInfo>
          <UniIcon></UniIcon>
          <p>{user?.university.name}</p>
        </SubInfo>
        <SubInfo>
          <CourseIcon></CourseIcon>
          <p>{user?.course}</p>
        </SubInfo>
        <ContactDiv>
          <p>Contato</p>
          <SubInfo>
            <EmailIcon></EmailIcon>
            <p>{user?.email}</p>
          </SubInfo>
          <SubInfo>
            <PhoneIcon></PhoneIcon>
            <p>{user?.cellphone}</p>
          </SubInfo>
        </ContactDiv>
      </PageContainer>
      <NavBar />
    </>
  )
}

export default UserPage