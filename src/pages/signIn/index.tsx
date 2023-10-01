import React from 'react'
import PageContainer from '../../components/page-container'
import styled from 'styled-components'

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
  
  return (
      <PageContainer>
        <Title>Cadastre-se no Par de Jarro</Title>
      </PageContainer>
  )
}
