import React, { useState } from 'react'
import PageContainer from '../../components/page-container'
import Input from '../../components/input'
import { useNavigate } from 'react-router-dom';
import { Button, CloseIcon, Form, Title, TitleContainer } from './styles';
import { useAuth } from '../../hooks/auth';
import SimpleInput from '../../components/simple-input';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const { signIn } = useAuth()
  
	const goBack = () => {
		navigate(-1);
	}

  const logIn = () => {
    (
      signIn({ email: email, password: password })
      .then(() => {
        navigate('/')
      })
    )
  }

  
  return (
      <PageContainer>
        <Form>
          <TitleContainer>
            <CloseIcon onClick={goBack} size={30} color='black'/>
            <Title>Entre no Par de Jarro</Title>
          </TitleContainer>
          <SimpleInput
            label='Email' 
            value={email}
            onChange={(e) => { setEmail(e.target.value)}}
          />
          <SimpleInput 
            label='Senha' 
            value={password}
            onChange={(e) => { setPassword(e.target.value)}}
            type='password'
          />
          <Button onClick={logIn}>Entrar</Button>
        </Form>
      </PageContainer>
  )

}