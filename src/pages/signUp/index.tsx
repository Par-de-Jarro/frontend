import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/page-container'
import DropDownInput from '../../components/dropdown-input'
import { useNavigate } from 'react-router-dom';
import { DropdownItem } from '../../types/input';
import api from '../../services/api';
import { Button, CloseIcon, FemaleIcon, Form, LocationIcon, MaleIcon, NonBinaryIcon, Title, TitleContainer, UninformedGenderIcon } from './styles';
import SimpleInput from '../../components/simple-input';
import MaskInput from '../../components/input-mask';

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
      }).catch((error) => {
        console.error('Create user failed: ', error);
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
      }).catch((error) => {
        console.error('Get universities failed: ', error);
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

  const getValueWithoutMask = (value: string) => {
    return value
    .replaceAll('.', '')
    .replace('-', '')
    .replace('(', '')
    .replace(')', '')
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
          <DropDownInput 
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <MaskInput 
            label='Telefone' 
            value={cellphone}
            mask="(99)99999-9999"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCellphone(getValueWithoutMask(e.target.value))}
          />
          <MaskInput 
            label='CPF' 
            value={cpf}
            mask="999.999.999-99"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(getValueWithoutMask(e.target.value))}
          />
          <SimpleInput 
            label='Curso' 
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <DropDownInput 
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
