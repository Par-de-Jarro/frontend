import React, { ReactNode } from 'react';
import { Container } from './styles';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <Container>
   {children}
  </Container>
);

export default PageContainer;