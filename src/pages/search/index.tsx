import React, { useEffect } from 'react'
import Card from '../../components/card'
import PageContainer from '../../components/page-container'
import { CardsContainer } from './styles'
import Header from '../../components/header'
import NavBar from '../../components/nav-bar'
import { NavLink } from 'react-router-dom';
import { useSpots } from '../../hooks/spots'

export default function SearchPage () {
  const spots = useSpots()


  useEffect(() => {
    spots.loadSpots()
  },[])
  
  return (
    <>
      <Header/>
      <PageContainer>
        <CardsContainer>
        {
          spots.spots.map((spot) => (
            <NavLink to={`/spots/${spot.id_spot}`} style={{ textDecoration: 'none' }}>
                <Card image_url={spot.images[0].image_url} key={spot.id_spot} title={spot.name} distance={spot.distance} empty_quota={spot.personal_quota} value={spot.value}/>
            </NavLink>
          ))
        }
        </CardsContainer>
      </PageContainer>
      <NavBar/>
    </>
  )
}
