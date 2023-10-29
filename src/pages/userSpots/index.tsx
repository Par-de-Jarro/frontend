/* eslint-disable react-hooks/exhaustive-deps */
import { CardsContainer, CloseIcon, Title, TitleContainer, PlusButton, PlusIcon, ButtonDiv } from "./styles"
import Card from '../../components/card'
import { Spot } from '../../types/spot'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PageContainer from "../../components/page-container";
import { useAuth } from "../../hooks/auth";
import NavBar from "../../components/nav-bar";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import HouseImage from '../../styles/assets/house.jpg'


const Spots: React.FC = () => {
	const [spots, setSpots] = useState<Spot[]>([]);
	const { user } = useAuth()

	const navigate = useNavigate()

	const goToCreateSpot = () => {
		navigate('/spot');
	}

	const goBack = () => {
		navigate(-1);
	}


	const loadSpots = async () => {
		if (user !== undefined) {
			await api.get('/spot/', {
				params: {
					id_user: user.id_user
				},
			})
				.then((response) => {
					const spots: Spot[] = response?.data;
					setSpots(spots);
				})
				.catch((error) => {
					console.error("Error on getting user spot: ", error)
				})
		}
	};

	useEffect(() => {
		loadSpots()
	}, [])

	return (
		<>
			<PageContainer>
				<TitleContainer>
					<CloseIcon onClick={goBack} size={30} color='black' />
					<Title>Meus Locais</Title>
				</TitleContainer>
				<CardsContainer>
					{
						spots.map((spot, index) => (
							<NavLink to={`/spots/${spot.id_spot}`} key={index} style={{ textDecoration: 'none' }}>
								<Card image_url={spot.images !== null ? spot.images[0].image_url : HouseImage} title={spot.name} distance={spot.distance} empty_quota={spot.personal_quota} value={spot.value} text_tag={spot.owner.id_user === user.id_user ? "Proprietario" : "Participante"} />
							</NavLink>
						))
					}
				</CardsContainer>
				<ButtonDiv>
					<PlusButton onClick={goToCreateSpot}>
						<PlusIcon />
					</PlusButton>
				</ButtonDiv>
			</PageContainer>
			<NavBar />
		</>
	)
}
export default Spots