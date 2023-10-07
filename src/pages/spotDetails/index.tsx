import React, {useState, useEffect} from 'react'
import PageContainer from '../../components/page-container'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { 
    SpotContainer, MainInfoDiv, MoneyIcon, OwnerDiv, UserImage, SubInfo, LocationIcon, SpotTitle, CigaretteIcon, MainButton, 
    HouseIcon, BedIcon, ShowerIcon, PetIcon, MapIcon, SpotImage
} from './styles';

import {Spot, Image} from '../../types/spot'


const SpotDetails: React.FC = () => {
    const [spot, setSpot] = useState<Spot>()

    const { id } = useParams();

    const getSpot = () => {
        api.get(`/spot/${id}`).then((response) => {
            const spot: Spot = response?.data
            setSpot(spot)
        })
    }

    useEffect(() => { getSpot() })

    return (
        <>
            <PageContainer>
              <SpotContainer>
                <Carousel showThumbs={false}>
                {
                    spot?.images.map((image: Image) => (
                        <div>
                            <SpotImage src={image.image_url} alt={`spot ${id}`}/>
                        </div>
                    ))
                }
                </Carousel>
                <OwnerDiv>
                    <UserImage src={spot?.owner.profile_img}/>
                    <p>{spot?.owner.name}</p>
                </OwnerDiv>
                <MainInfoDiv>
                    <SpotTitle>{spot?.name}</SpotTitle>
                    <p>{spot?.description}</p>
                </MainInfoDiv>
                <SubInfo>
                    <MoneyIcon></MoneyIcon>
                    <p>R$ {spot?.value}</p>
                </SubInfo>
                <SubInfo>
                    <HouseIcon></HouseIcon>
                    <p>{spot?.type}</p>
                </SubInfo>
                <SubInfo>
                    <MapIcon></MapIcon>
                    <p>{spot?.city}, {spot?.state}</p>
                </SubInfo>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>{spot?.street}</p>
                </SubInfo>
                <SubInfo>
                    <BedIcon></BedIcon>
                    <p>{spot?.key.convenience.rooms_quantity} quartos</p>
                </SubInfo>
                <SubInfo>
                    <ShowerIcon></ShowerIcon>
                    <p>{spot?.key.convenience.bathrooms_quantity} banheiros</p>
                </SubInfo>
                <SubInfo>
                    <PetIcon></PetIcon>
                    <p>{spot?.key.allowance.allow_pet ? "Permite pets" : "Não permite pets"}</p>
                </SubInfo>
                <SubInfo>
                    <CigaretteIcon></CigaretteIcon>
                    <p>{spot?.key.allowance.allow_smoker ? "Permite fumantes" : "Não permite fumantes"}</p>
                </SubInfo>
              </SpotContainer>
              <MainButton>Solicitar entrada</MainButton>
            </PageContainer>
        </>
      )
  }
  
  export default SpotDetails