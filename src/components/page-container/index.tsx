import React, { type ReactNode } from 'react'
import { Container } from './styles'

interface PageContainerProps {
  children: ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <Container>
   {children}
  </Container>
)

export default PageContainer
