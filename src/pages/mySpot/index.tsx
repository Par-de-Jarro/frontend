import { CardsContainer, CloseIcon, MainButton, OwnerDiv, SpotContainer, UserImage } from "./styles"
import { Carousel } from 'react-responsive-carousel';
import Card from '../../components/card'
import { Spot, Image } from '../../types/spot'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import api from "../../services/api";
import PageContainer from "../../components/page-container";
import UserPic from '../../styles/assets/User.jpg'
import { useAuth } from "../../hooks/auth";
import NavBar from "../../components/nav-bar";
import { NavLink } from "react-router-dom";
import { useSpots } from "../../hooks/spots";
import Header from "../../components/header";


const MySpot: React.FC = () => {
	const [spot, setSpot] = useState<Spot>();


	const { id } = useParams();
	const { user } = useAuth()

	const spots = useSpots()
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

	return (
		<>
			<Header />
			<PageContainer>
				<CardsContainer>
					{
						spots.spots.map((spot) => (
							<NavLink to={`/spots/${spot.id_spot}`} style={{ textDecoration: 'none' }}>
								<Card image_url={spot.images[0].image_url} key={spot.id_spot} title={spot.name} distance={spot.distance} empty_quota={spot.personal_quota} value={spot.value} />
							</NavLink>
						))
					}
				</CardsContainer>
			</PageContainer>
			<NavBar />
		</>
	)
}
export default MySpot