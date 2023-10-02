import React from 'react'
import PageContainer from '../../components/page-container'
import { ProfileDiv, UserImage, UserInfo, UserInfoTitle, UserInfoValue, MainButton} from './styles'

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
                <UserInfo>
                    <UserInfoTitle>Nome</UserInfoTitle>
                    <UserInfoValue>{user.name}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Email</UserInfoTitle>
                    <UserInfoValue>{user.email}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Telefone</UserInfoTitle>
                    <UserInfoValue>{user.cellphone}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>CPF</UserInfoTitle>
                    <UserInfoValue>{user.document_id}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Data de nascimento</UserInfoTitle>
                    <UserInfoValue>{formatDate(user.birthdate)}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Gênero</UserInfoTitle>
                    <UserInfoValue>{user.gender}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Universidade</UserInfoTitle>
                    <UserInfoValue>{user.university.slug}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Curso</UserInfoTitle>
                    <UserInfoValue>{user.course}</UserInfoValue>
                </UserInfo>
                <UserInfo>
                    <UserInfoTitle>Bio</UserInfoTitle>
                    <UserInfoValue>{user.bio}</UserInfoValue>
                </UserInfo>
                <MainButton>Editar</MainButton>
            </ProfileDiv>
        </PageContainer>
      </>
    )
}

export default UserProfile