import React from 'react'
import { Container, CardImage, InfoContainer, PrimaryText, SecondaryText, DefaultCardImage, WithoutImageIcon, TagsDiv } from './styles'

interface CardProps {
  title: string
  empty_quota: number
  distance?: number
  value: number
  image_url?: string
  is_owner?: boolean
}

const Card: React.FC<CardProps> = ({ title, empty_quota, distance, value, image_url, is_owner }) => (
  <Container>
    {image_url && <CardImage src={image_url} />}
    {!image_url &&
      <DefaultCardImage>
        <WithoutImageIcon />
      </DefaultCardImage>
    }
    <InfoContainer>
      <PrimaryText>{title}</PrimaryText>
      <SecondaryText>{empty_quota} vagas disponíveis</SecondaryText>
      {distance && <SecondaryText>{distance} km de distância</SecondaryText>}
      <PrimaryText>R${value} Mês</PrimaryText>
      {is_owner &&
        <TagsDiv>proprietário</TagsDiv>
      }
    </InfoContainer>
  </Container>
)

export default Card
