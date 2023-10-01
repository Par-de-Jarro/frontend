import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/page-container'
import Input from '../../components/input'
import { useNavigate } from 'react-router-dom';
import { Recommendation } from '../../types/input';
import api from '../../services/api';
import { Button, CloseIcon, FemaleIcon, Form, LocationIcon, MaleIcon, NonBinaryIcon, Title, TitleContainer, UninformedGenderIcon } from './styles';

export default function SignUp () {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [cpf, setCpf] = useState('')
  const [course, setCourse] = useState('')
  const [university, setUniversity] = useState('')
  const [universityRecommendations, setUniversityRecommendations] = useState<Array<Recommendation>>([])
  const [genderRecommendations, setGenderRecommendations] = useState<Array<Recommendation>>([])
  const navigate = useNavigate();
  
	const goBack = () => {
		navigate(-1);
	}

  const createUser = () => {
    (
      api.post('/user', {
          name: name,
          email: email,
          cellphone: cellphone,
          document_id: cpf,
          birthdate: "2000-04-03",
          course: course,
          bio: bio,
          gender: gender,
          password: password,
          id_university: university
      }).then(() => {
        navigate('/')
      }).catch(() => {
        console.log('error');
      })
    )
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
        label: "Desejo não Informar",
        icon: (<UninformedGenderIcon/>)
      }
    ]

    setGenderRecommendations(genders)
  }
  

  useEffect(() => {
    getGenders()
    getUniversities()
  }, [])

  
  return (
      <PageContainer>
        <Form>
          <TitleContainer>
            <CloseIcon onClick={goBack} size={30} color='black'/>
            <Title>Cadastre-se no Par de Jarro</Title>
          </TitleContainer>
          <Input 
            label='Nome Completo' 
            inputValue={name}
            onInputValueChange={setName}
          />
          <Input 
            recommendations={genderRecommendations} 
            onSelectItem={(item) => {setGender(item.value)}} 
            label='Gênero' 
            inputValue={gender} 
          />
          <Input 
            label='Email' 
            inputValue={email}
            onInputValueChange={setEmail}
          />
          <Input 
            label='Senha' 
            inputValue={password}
            onInputValueChange={setPassword}
            type='password'
          />
          <Input 
            label='Bio' 
            inputValue={bio}
            onInputValueChange={setBio}
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
            label='Curso' 
            inputValue={course}
            onInputValueChange={setCourse}
          />
          <Input 
            recommendations={universityRecommendations} 
            onSelectItem={(item) => {setUniversity(item.value)}} 
            label='Universidade' 
            inputValue={university} 
          />
          <Button onClick={createUser}> Criar Conta </Button>
        </Form>
      </PageContainer>
  )

}
