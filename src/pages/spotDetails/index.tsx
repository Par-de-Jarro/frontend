/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import PageContainer from '../../components/page-container'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import UserPic from '../../styles/assets/User.jpg'
import { useAuth } from '../../hooks/auth'
import { useNavigate, NavLink } from 'react-router-dom';

import { 
    SpotContainer, MainInfoDiv, MoneyIcon, OwnerDiv, UserImage, SubInfo, LocationIcon, SpotTitle, CigaretteIcon, MainButton, 
    HouseIcon, BedIcon, ShowerIcon, PetIcon, MapIcon, CloseIcon
} from './styles';

import {Spot, Image} from '../../types/spot'

const spotTypeMap = new Map([
    ['apartment', 'Apartamento'],
    ['house', 'Casa'],
]);


const SpotDetails: React.FC = () => {
    const [spot, setSpot] = useState<Spot>()

    const { id } = useParams();
    const { user } = useAuth()

    const navigate = useNavigate();
  
	const goBack = () => {
		navigate(-1);
	}

    const handleClick = () => {
        try {
            if(user === undefined) {
                navigate('/userConfig')
            }
            if(spot?.owner.id_user !== user.id_user) {
                api.post(`/spot/${id}/request`).then((response) => {
                    alert("Sua solicitação foi feita com sucesso")
                }).catch(() => {
                    alert("Algo de errado ocorreu na sua solicitação")
                    console.log('error');
                })
            }
        }
        catch{
            alert("Algo de errado ocorreu na sua solicitação")
            console.log('error');
        }
    }

    const getSpot = () => {
        api.get(`/spot/${id}`).then((response) => {
            const spot: Spot = response?.data
            setSpot(spot)
        }).catch((error) => {
            alert("Algo de errado ocorreu na sua solicitação")
            console.log('Erro na solicitação de lugar: ', error);
        })
    }

    useEffect(() => { getSpot() }, [])

    return (
        <>
            <Carousel showThumbs={false}>
                {
                    spot?.images.map((image: Image) => (
                        <div>
                            <CloseIcon onClick={goBack} size={30}/>
                            <img src={image.image_url} alt={`spot ${id}`}/>
                        </div>
                    ))
                }
            </Carousel>
            <PageContainer>
              <SpotContainer>
                <OwnerDiv>
                    <NavLink to={ user ? `/user/${spot?.owner.id_user}` : '/signIn'} style={{ textDecoration: 'none' }}>
                        <UserImage src={spot?.owner.profile_img || UserPic}/>
                    </NavLink>
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
                    <p>{spotTypeMap.get(spot?.type || "")}</p>
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
              <MainButton onClick={handleClick}>{user && user.id_user === spot?.owner.id_user ? 'Editar local' : 'Solicitar entrada'}</MainButton>
            </PageContainer>
        </>
      )
  }
  
  export default SpotDetails