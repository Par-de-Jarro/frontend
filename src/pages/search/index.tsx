import React from 'react';
import Card from '../../components/card';
import PageContainer from '../../components/page-container';
import { CardsContainer } from './styles';
import Header from '../../components/header';
import NavBar from '../../components/nav-bar';
const SearchPage: React.FC = () => (
  <>
    <Header/>
    <PageContainer>
      <CardsContainer>
        <Card title='Lindo Apartamento no Benvenutto' distance={0.1} empty_quota={2} value={450}/>
        <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
        <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
        <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
        <Card title='Prime Residence' distance={0.5} empty_quota={3} value={250}/>
      </CardsContainer>
    </PageContainer>
    <NavBar/>
  </>
);

export default SearchPage;