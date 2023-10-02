import React from 'react'
import PageContainer from '../../components/page-container'
import { ProfileDiv, UserImage, UserInfoDiv, UserInfoTitle, UserInfoValue} from './styles'
import { MainButton} from '../../components/button/styles'

import { useAuth } from '../../hooks/auth'

const UserProfile: React.FC = () => {
    const { user } = useAuth()

    const formatDate = (date: string) => {
        const dateParts = date.split('-');
        return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    }
  return (
      <>
        <PageContainer>
            <ProfileDiv>
                <UserImage src={user.profile_img}/>
                <UserInfoDiv>
                    <UserInfoTitle>Nome</UserInfoTitle>
                    <UserInfoValue>{user.name}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Email</UserInfoTitle>
                    <UserInfoValue>{user.email}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Telefone</UserInfoTitle>
                    <UserInfoValue>{user.cellphone}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>CPF</UserInfoTitle>
                    <UserInfoValue>{user.document_id}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Data de nascimento</UserInfoTitle>
                    <UserInfoValue>{formatDate(user.birthdate)}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Gênero</UserInfoTitle>
                    <UserInfoValue>{user.gender}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Universidade</UserInfoTitle>
                    <UserInfoValue>{user.gender}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Curso</UserInfoTitle>
                    <UserInfoValue>{user.course}</UserInfoValue>
                </UserInfoDiv>
                <UserInfoDiv>
                    <UserInfoTitle>Bio</UserInfoTitle>
                    <UserInfoValue>{user.bio}</UserInfoValue>
                </UserInfoDiv>
                <MainButton>Editar</MainButton>
            </ProfileDiv>
        </PageContainer>
      </>
    )
}

export default UserProfile