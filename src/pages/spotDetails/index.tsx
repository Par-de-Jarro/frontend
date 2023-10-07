import React from 'react'
import PageContainer from '../../components/page-container'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { 
    SpotContainer, MainInfoDiv, MoneyIcon, OwnerDiv, UserImage, SubInfo, LocationIcon, SpotTitle, CigaretteIcon, MainButton, 
    HouseIcon, BedIcon, ShowerIcon, PetIcon, MapIcon
} from './styles';


const SpotDetails: React.FC = () => {
    const { id } = useParams();

    const getSpot = () => {
        (
          api.get('/spot').then((response) => {
            const spot = response.data
          })
        )
    }

    return (
        <>
            <PageContainer>
              <SpotContainer>
                <Carousel showThumbs={false}>
                    <div>
                        <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="demo"/>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="demo"/>
                    </div>
                </Carousel>
                <OwnerDiv>
                    <UserImage src="{profileImage}"/>
                    <p>Owner name</p>
                </OwnerDiv>
                <MainInfoDiv>
                    <SpotTitle>image name</SpotTitle>
                </MainInfoDiv>
                <p>description description description description description description description description</p>
                <SubInfo>
                    <MoneyIcon></MoneyIcon>
                    <p>R$ 200,00</p>
                </SubInfo>
                <SubInfo>
                    <HouseIcon></HouseIcon>
                    <p>Tipo</p>
                </SubInfo>
                <SubInfo>
                    <MapIcon></MapIcon>
                    <p>city</p>
                </SubInfo>
                <SubInfo>
                    <LocationIcon></LocationIcon>
                    <p>address</p>
                </SubInfo>
                <SubInfo>
                    <BedIcon></BedIcon>
                    <p>Qtd de quartos</p>
                </SubInfo>
                <SubInfo>
                    <ShowerIcon></ShowerIcon>
                    <p>Qtd banheiros</p>
                </SubInfo>
                <SubInfo>
                    <PetIcon></PetIcon>
                    <p>Permite pet</p>
                </SubInfo>
                <SubInfo>
                    <CigaretteIcon></CigaretteIcon>
                    <p>Permite fuamnte</p>
                </SubInfo>
              </SpotContainer>
              <MainButton>Solicitar entrada</MainButton>
            </PageContainer>
        </>
      )
  }
  
  export default SpotDetails