import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/page-container'
import { ProfileDiv, UserImage, MainButton, FemaleIcon, MaleIcon, NonBinaryIcon, UninformedGenderIcon, LocationIcon, ImageInput, ImageInputWrapper } from './styles'
import { Recommendation } from '../../types/input';
import Input from '../../components/input'
import api from '../../services/api';

import { useAuth } from '../../hooks/auth'

const UserProfile: React.FC = () => {
    const { user } = useAuth()

    const [name, setName] = useState(user.name)
    const [gender, setGender] = useState(user.gender)
    const [email, setEmail] = useState(user.email)
    const [bio, setBio] = useState(user.bio)
    const [cellphone, setCellphone] = useState(user.cellphone)
    const [cpf, setCpf] = useState(user.document_id)
    const [course, setCourse] = useState(user.course)
    const [university, setUniversity] = useState(user.university.slug)
    const [birthdate, setBirthdate] = useState(user.birthdate)
    const [universityRecommendations, setUniversityRecommendations] = useState<Array<Recommendation>>([])
    const [genderRecommendations, setGenderRecommendations] = useState<Array<Recommendation>>([])

    const token = localStorage.getItem('@ParDeJarro:token');

    const headers = {
      'Api-Key': 'zKVWMjBIxCxAfs40OqIdqgNwsyCIyCLMhL90T3t1iNOOt2G6M5wfgiej5mZPAIw',
      'Authorization': `Bearer ${token}`, 
    };

    const updateUser = () => {
      (
        api.put('/user', {
            name: name,
            email: email,
            cellphone: cellphone,
            document_id: cpf,
            birthdate: birthdate,
            course: course,
            bio: bio,
            gender: gender,
            id_university: user.university.id_university
        }, {headers}).then((response) => {
          alert("User updated with success")
          const { user } = response.data
        }).catch(() => {
          alert("Something went wrong while updating user")
          console.log('error');
        })
      )
    }

    const getGenders = () => {
        const genders = [
          {
            value: "female",
            label: "Feminino",
            icon: (<FemaleIcon/>)
          },
          {
            value: "male",
            label: "Masculino",
            icon: (<MaleIcon/>)
          },
          {
            value: "non-binary",
            label: "Não binário",
            icon: (<NonBinaryIcon/>)
          },
          {
            value: "uninformed",
            label: "Não informado",
            icon: (<UninformedGenderIcon/>)
          }
        ]
    
        setGenderRecommendations(genders)
      }

    const getUniversities = () => {
        (
          api.get('/university').then((response) => {
            const universities = response.data.map((elem : { name: string, id_university: string } ) => {
                return {
                  value: elem.id_university,
                  label: elem.name,
                  icon: (<LocationIcon/>)
                }
            })
    
            setUniversityRecommendations(universities)
          })
        )
      }

    useEffect(() => {
        getGenders()
        getUniversities()
        setName(user.name)
        setGender(user.gender)
        setEmail(user.email)
        setBio(user.bio)
        setCellphone(user.cellphone)
        setCpf(user.document_id)
        setCourse(user.course)
        setUniversity(user.university.slug)
      }, [user.name, user.gender, user.email, user.bio, user.cellphone, user.document_id, user.course, user.university.slug])

  return (
      <>
        <PageContainer>
            <ProfileDiv>
                <UserImage src={user.profile_img}/>
                <ImageInputWrapper>
                  <ImageInput type="file" accept="image/*"></ImageInput>
                </ImageInputWrapper>
                <Input 
                    label='Nome' 
                    inputValue={name}
                    onInputValueChange={setName}
                />
                <Input 
                    label='Email' 
                    inputValue={email}
                    onInputValueChange={setEmail}
                />
                <Input 
                    label='Telefone' 
                    inputValue={cellphone}
                    onInputValueChange={setCellphone}
                />
                <Input 
                    label='CPF' 
                    inputValue={cpf}
                    onInputValueChange={setCpf}
                />
                <Input 
                    label='Data de nascimento' 
                    inputValue={birthdate}
                    onInputValueChange={setBirthdate}
                    type='date'
                />
                <Input 
                    recommendations={genderRecommendations} 
                    onSelectItem={(item) => {setGender(item.value)}} 
                    label='Gênero' 
                    inputValue={gender} 
                />
                <Input 
                    recommendations={universityRecommendations} 
                    onSelectItem={(item) => {setUniversity(item.value)}} 
                    label='Universidade' 
                    inputValue={university} 
                />
                <Input 
                    label='Curso' 
                    inputValue={course}
                    onInputValueChange={setCourse}
                />
                <Input 
                    label='Bio' 
                    inputValue={bio}
                    onInputValueChange={setBio}
                />
                <MainButton onClick={updateUser} >Editar</MainButton>
            </ProfileDiv>
        </PageContainer>
      </>
    )
}

export default UserProfile