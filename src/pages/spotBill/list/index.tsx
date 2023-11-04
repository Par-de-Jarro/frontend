import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { } from './styles'
import { useParams } from 'react-router-dom';
import { MainInfoDiv, CloseIcon, CloseDiv, Title, Value, RequesterName, Container, ButtonDiv, PlusIcon, Price, PlusButton, PaymentsDiv, RequesterInfo, RequesterImage } from './styles';
import { Carousel } from 'react-responsive-carousel';
import DropDownInput from '../../../components/dropdown-input'
import { useAuth } from '../../../hooks/auth'
import {Spot, Image} from '../../../types/spot'
import { useNavigate, NavLink } from 'react-router-dom';
import HouseImage from '../../../styles/assets/house.jpg'
import BillPic from '../../../styles/assets/bill.png'
import { DropdownItem } from '../../../types/input';


const ListSpotBill: React.FC = () => {
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
                <Title>2023</Title>
                <Value>Dezembro</Value>
            </MainInfoDiv>
            <PageContainer>
                <Container>
                    <NavLink to={`/user/`} style={{ textDecoration: 'none' }}>
                        <PaymentsDiv>
                            <RequesterInfo>
                                <RequesterImage src={BillPic} />
                            <RequesterName>{truncateName(name)}</RequesterName>
                            </RequesterInfo>
                            <Price>Pendente</Price>
                        </PaymentsDiv>
                    </NavLink>
                    <ButtonDiv>
                        <PlusButton>
                            <PlusIcon/>
                        </PlusButton>
        		    </ButtonDiv>
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default ListSpotBill