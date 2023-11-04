import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { } from './styles'
import { useParams } from 'react-router-dom';
import { MainInfoDiv, CloseIcon, CloseDiv, Title, Value, RequesterName, Container, SpotDiv, Status, CircularImage, PaymentsDiv, RequesterInfo, RequesterImage } from './styles';
import { Carousel } from 'react-responsive-carousel';
import { useAuth } from '../../../hooks/auth'
import {Spot, Image} from '../../../types/spot'
import { useNavigate, NavLink } from 'react-router-dom';
import HouseImage from '../../../styles/assets/house.jpg'
import UserPic from '../../../styles/assets/User.jpg'


const LoadSpotBill: React.FC = () => {
    const [spot, setSpot] = useState<Spot>()

    // const { id } = useParams();
    const { user } = useAuth()
    const id = "4bc6d78f-598b-4230-866d-0cd45d1f762b"

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

    const name = "name name name name"

    return (
        <>
            <MainInfoDiv>
                <CloseDiv>
                    <CloseIcon onClick={goBack} size={30}/>
                </CloseDiv>
                <Title>Conta nome</Title>
                <Value>R$ 200,00</Value>
            </MainInfoDiv>
            <PageContainer>
                <Container>
                    <Carousel showThumbs={false}>
                        {
                            spot?.images.map((image: Image) => (
                                <div>
                                    <img src={image.image_url} alt={`spot ${id}`}/>
                                </div>
                            ))
                        }
                    </Carousel>
                    <SpotDiv>
                        <NavLink to={ user ? `/user/${spot?.owner.id_user}` : '/signIn'} style={{ textDecoration: 'none' }}>
                            <CircularImage src={spot?.owner.profile_img || HouseImage}/>
                        </NavLink>
                        <p>{spot?.owner.name}</p>
                    </SpotDiv>
                    <PaymentsDiv>
                        <RequesterInfo>
                            <NavLink to={`/user/`} style={{ textDecoration: 'none' }}>
                                <RequesterImage src={UserPic} />
                            </NavLink>
                            <RequesterName>{truncateName(name)}</RequesterName>
                        </RequesterInfo>
                        <Status>Pendente</Status>
                    </PaymentsDiv>
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default LoadSpotBill