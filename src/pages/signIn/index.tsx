import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/page-container'
import styled from 'styled-components'
import Input from '../../components/input'
import { NavLink, useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'
import { Recommendation } from '../../types/input';
import api from '../../services/api';

const Title = styled.p`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 22px;
    color: #2b2b2b;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`

const CloseIcon = styled(IoClose)`
  height: 25px;
  width: 25px;
  color: #513422;
  cursor: pointer;
`
export const Button = styled.button`
    border: 0;
    height: 50px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items:  center;

    text-decoration: none;
    font-size: 16px;

    background-color: #f8f4e8;
    color: #513422;
    border-radius: 12px;


    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

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
              label: elem.name
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
        label: "Feminino"
      },
      {
        value: "male",
        label: "Masculino"
      },
      {
        value: "non-binary",
        label: "Não binário"
      },
      {
        value: "uninformed",
        label: "Desejo não Informar"
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
