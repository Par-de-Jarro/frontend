import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/page-container'
import Input from '../../components/dropdown-input'
import { useNavigate } from 'react-router-dom';
import { DropdownItem } from '../../types/input';
import api from '../../services/api';
import { Button, CloseIcon, FemaleIcon, Form, LocationIcon, MaleIcon, NonBinaryIcon, Title, TitleContainer, UninformedGenderIcon } from './styles';
import SimpleInput from '../../components/simple-input';

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
  const [universityRecommendations, setUniversityRecommendations] = useState<Array<DropdownItem>>([])
  const [genderRecommendations, setGenderRecommendations] = useState<Array<DropdownItem>>([])
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
          <SimpleInput 
            label='Nome Completo' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            recommendations={genderRecommendations} 
            onSelectItem={(item) => {setGender(item.value)}} 
            label='Gênero' 
            inputValue={gender} 
            onInputValueChange={setGender}
          />
          <SimpleInput
            label='Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SimpleInput 
            label='Senha' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <SimpleInput 
            label='Bio' 
            value={name}
            onChange={(e) => setBio(e.target.value)}
          />
          <SimpleInput 
            label='Telefone' 
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
          <SimpleInput 
            label='CPF' 
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <SimpleInput 
            label='Curso' 
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <Input 
            recommendations={universityRecommendations} 
            inputValue={university} 
            onSelectItem={(item) => {setUniversity(item.value)}} 
            label='Universidade' 
            onInputValueChange={setUniversity}
          />
          <Button onClick={createUser}> Criar Conta </Button>
        </Form>
      </PageContainer>
  )

}
