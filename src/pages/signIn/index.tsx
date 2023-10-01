import React, { useState } from 'react'
import PageContainer from '../../components/page-container'
import styled from 'styled-components'
import Input from '../../components/input'

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

export default function SignIn () {
  const [name, setName] = useState('')
  const [university, setUniversity] = useState('')

  const recommendations = [
    {
      "label": "Universidade Federal de Campina Grande",
      "value": "UUID1"
    },
    {
      "label": "Universidade Estadual da Paraíba",
      "value": "UUID2"
    }
  ]

  return (
      <PageContainer>
        <Title>Cadastre-se no Par de Jarro</Title>
          <Input 
            label='Nome Completo' 
            inputValue={name}
            onInputValueChange={setName}
          />
          <Input 
            recommendations={recommendations} 
            onSelectItem={(item) => {console.log(item.value);}} 
            label='Universidade' 
            inputValue={university} 
            onInputValueChange={setUniversity}
          />
      </PageContainer>
  )

}
