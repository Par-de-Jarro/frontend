import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { } from './styles'
import { useParams } from 'react-router-dom';
import { MainInfoDiv, CloseIcon, CloseDiv, Title, Value, RequesterName, Container, SpotDiv, Status, CircularImage, PaymentsDiv, RequesterInfo, RequesterImage } from './styles';
import { Carousel } from 'react-responsive-carousel';
import { useAuth } from '../../../hooks/auth'
import {SpotBill, Image} from '../../../types/spotBill'
import { useNavigate, NavLink } from 'react-router-dom';
import HouseImage from '../../../styles/assets/house.jpg'
import UserPic from '../../../styles/assets/User.jpg'
import SpotBillPic from '../../../styles/assets/bill.png'


const LoadSpotBill: React.FC = () => {
    const [spotBill, setSpotBill] = useState<SpotBill>()

    const { user } = useAuth()
    
    const { id } = useParams();

    const navigate = useNavigate();
  
	const goBack = () => {
		navigate(-1);
	}

    const truncateName = (name: string) => {
        const maxSize = 12
        if (name.length <= maxSize) {
          return name
        } else {
          const truncatedName = name.slice(0, maxSize) + '...';
          return truncatedName
        }
    }

    const getSpotBill = () => {
        api.get(`/spot_bill/${id}`).then((response) => {
            const spot: SpotBill = response?.data
            setSpotBill(spot)
        }).catch((error) => {
            alert("Algo de errado ocorreu na sua solicitação")
            console.log('Erro na solicitação de lugar: ', error);
        })
    }

    useEffect(() => { getSpotBill() }, [])

    return (
        <>
            <MainInfoDiv>
                <CloseDiv>
                    <CloseIcon onClick={goBack} size={30}/>
                </CloseDiv>
                <Title>{spotBill?.name}</Title>
                <Value>R$ {spotBill?.value}</Value>
            </MainInfoDiv>
            <PageContainer>
                <Container>
                    <Carousel showThumbs={false}>
                        {
                            spotBill?.images.map((image: Image) => (
                                <div>
                                    <img src={image.image_url || SpotBillPic} alt={`spot ${id}`}/>
                                </div>
                            ))
                        }
                    </Carousel>
                    <SpotDiv>
                        <NavLink to={ user ? `/spots/${spotBill?.spot.id_spot}` : '/signIn'} style={{ textDecoration: 'none' }}>
                            <CircularImage src={spotBill?.spot.images[0].image_url || HouseImage}/>
                        </NavLink>
                        <p>{spotBill?.spot.name}</p>
                    </SpotDiv>
                    <PaymentsDiv>
                        <RequesterInfo>
                            <NavLink to={`/user/`} style={{ textDecoration: 'none' }}>
                                <RequesterImage src={UserPic} />
                            </NavLink>
                            <RequesterName>{truncateName('Ocupante 1')}</RequesterName>
                        </RequesterInfo>
                        <Status>Pendente</Status>
                    </PaymentsDiv>
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default LoadSpotBill