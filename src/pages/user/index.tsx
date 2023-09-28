import React from 'react'
import PageContainer from '../../components/page-container'
import { Button, Container } from './styles'
import NavBar from '../../components/nav-bar'

const UserPage: React.FC = () => (
  <>
    <PageContainer>
      <Container>
        <Button to='/signin'>Criar Conta</Button>
      </Container>
    </PageContainer>
    <NavBar/>
  </>
)

export default UserPage
