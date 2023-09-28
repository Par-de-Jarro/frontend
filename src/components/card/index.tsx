import React from 'react'
import { Container, CardImage, InfoContainer, PrimaryText, SecondaryText } from './styles'

interface CardProps {
  title: string
  empty_quota: number
  distance: number
  value: number
}

const Card: React.FC<CardProps> = ({ title, empty_quota, distance, value }) => (
  <Container>
    <CardImage src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
    <InfoContainer>
      <PrimaryText>{title}</PrimaryText>
      <SecondaryText>{empty_quota} vagas disponíveis</SecondaryText>
      <SecondaryText>{distance} km de distância</SecondaryText>
      <PrimaryText>R${value} Mês</PrimaryText>
    </InfoContainer>
  </Container>
)

export default Card
