import React from 'react';
import Card from '../../components/card';
import PageContainer from '../../components/page_container';
import { Container } from './styles';
const SearchPage: React.FC = () => (
  <PageContainer>
    <Container>
      <Card title='Lindo Apartamento no Benvenutto' distance={0.1} empty_quota={2} value={450}/>
      <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
      <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
      <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
      <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
    </Container>
  </PageContainer>
);

export default SearchPage;