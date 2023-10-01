import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/page-container'
import Input from '../../components/input'
import { useNavigate } from 'react-router-dom';
import { Recommendation } from '../../types/input';
import api from '../../services/api';
import { Button, CloseIcon, FemaleIcon, Form, LocationIcon, MaleIcon, NonBinaryIcon, Title, TitleContainer, UninformedGenderIcon } from './styles';

export default function SignIn () {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [cpf, setCpf] = useState('')
  const [course, setCourse] = useState('')
  const [university, setUniversity] = useState('')
  const navigate = useNavigate();

  const [universityRecommendations, setUniversityRecommendations] = useState<Array<Recommendation>>([])
  const [genderRecommendations, setGenderRecommendations] = useState<Array<Recommendation>>([])

	const goBack = () => {
		navigate(-1);
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
            onSelectItem={(item) => {console.log(item.value);}} 
            label='Gênero' 
            inputValue={gender} 
            onInputValueChange={setGender}
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
            onSelectItem={(item) => {console.log(item.value);}} 
            label='Universidade' 
            inputValue={university} 
            onInputValueChange={setUniversity}
          />
          <Button onClick={() => {}}> Criar Conta </Button>
        </Form>
      </PageContainer>
  )

}
