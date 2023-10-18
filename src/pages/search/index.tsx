/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Card from '../../components/card'
import PageContainer from '../../components/page-container'
import { CardsContainer, PlusButton, PlusIcon, ButtonDiv } from './styles'
import Header from '../../components/header'
import NavBar from '../../components/nav-bar'
import { NavLink } from 'react-router-dom';
import { useSpots } from '../../hooks/spots'
import HouseImage from '../../styles/assets/house.jpg'
import { useNavigate } from 'react-router-dom'

export default function SearchPage() {
  const spots = useSpots()

  const navigate = useNavigate()

  const goToCreateSpot = () => {
    navigate('/spot');
}

  useEffect(() => {
    spots.loadSpots()
  }, [])

  return (
    <>
      <Header />
      <PageContainer>
        <CardsContainer>
        {
          spots.spots.map((spot, index) => (
            <NavLink to={`/spots/${spot.id_spot}`} key={index} style={{ textDecoration: 'none' }}>
                <Card image_url={spot.images !== null? spot.images[0].image_url : HouseImage} title={spot.name} distance={spot.distance} empty_quota={spot.personal_quota} value={spot.value}/>
            </NavLink>
          ))
        }
        </CardsContainer>
        <ButtonDiv>
          <PlusButton onClick={goToCreateSpot}>
              <PlusIcon/>
          </PlusButton>
        </ButtonDiv>
      </PageContainer>
      <NavBar />
    </>
  )
}
