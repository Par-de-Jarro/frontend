import React from 'react'
import Card from '../../components/card'
import PageContainer from '../../components/page-container'
import { CardsContainer } from './styles'
import Header from '../../components/header'
import NavBar from '../../components/nav-bar'
import { useSpots } from '../../hooks/spots'

export default function SearchPage () {
  const spots = useSpots()

  return (
    <>
      <Header/>
      <PageContainer>
        <CardsContainer>
        {
          spots.spots.map((spot) => (
          <Card key={spot.id_spot} title={spot.name} distance={spot.distance} empty_quota={spot.personal_quota} value={spot.value}/>
          ))
        }
        </CardsContainer>
      </PageContainer>
      <NavBar/>
    </>
  )
}
