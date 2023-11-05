import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { } from './styles'
import { MainInfoDiv, CloseIcon, BackIcon, CloseDiv, Title, LocationIcon, 
    ForwardIcon, Value, DateSelectorDiv, BillName, Container, ButtonDiv, Button, PlusIcon, 
    Price, PlusButton, PaymentsDiv, BillInfo, CircularImage, WarningTitle } from './styles';
import DropDownInput from '../../../components/dropdown-input'
import { useAuth } from '../../../hooks/auth'
import {Spot} from '../../../types/spot'
import {SpotBill} from '../../../types/spotBill'
import { useNavigate, NavLink } from 'react-router-dom';
import BillPic from '../../../styles/assets/bill.png'
import { DropdownItem } from '../../../types/input';


const ListSpotBill: React.FC = () => {
    const months = [
        {label: "Janeiro", value: "01", endDay: "31"}, {label: "Fevereiro", value: "02", endDay: "28"},{label: "Março", value: "03", endDay: "31"},
        {label: "Abril", value: "04", endDay: "30"},{label: "Maio", value: "05", endDay: "31"},{label: "Junho", value: "06", endDay: "30"},
        {label: "Julho", value: "07", endDay: "31"},{label: "Agosto", value: "08", endDay: "31"},{label: "Setembro", value: "09", endDay: "30"},
        {label: "Outubro", value: "10", endDay: "31"},{label: "Novembro", value: "11", endDay: "30"},{label: "Dezembro", value: "12", endDay: "31"}
    ];

    const [currentMonthIndex, setCurrentMonthIndex] = useState(10);
    const [year, setYear] = useState(2023);
    
    const [spotBills, setSpotBills] = useState<SpotBill[]>([])
    const { user } = useAuth()
    const [spotId, setSpotId] = useState('')
    const [spotRecommendations, setSpotRecommendations] = useState<Array<DropdownItem>>([])

    const navigate = useNavigate();
  
	const goBack = () => {
		navigate(-1);
	}

    const goBackCalendar = () => {
        setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + months.length) % months.length);
      };
    
    const goForwardCalendar = () => {
        setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
    };

    const changeYear = (value: number) => {
        setYear(year + value)
    }

    const loadSpots = async () => {   
		if(user !== undefined) {
			await api.get('/spot/', {
				params: {
					id_user: user.id_user
				},
			})
			.then((response) => {
				const spots: Spot[] = response?.data;
                const spotsAsDropDownValues: DropdownItem[] = spots.map(spot => ({
                    value: spot.id_spot,
                    label: spot.name,
                    icon: <LocationIcon/>
                  }));
				setSpotRecommendations(spotsAsDropDownValues);
                setSpotId(spotsAsDropDownValues[0].value)
			})
			.catch((error) => {
			console.error("Error on getting user spot: ", error)
			})
		}
  };


    const truncateName = (name: string) => {
        const maxSize = 12
        if (name.length <= maxSize) {
          return name
        } else {
          const truncatedName = name.slice(0, maxSize) + '...';
          return truncatedName
        }
    }

    const getSpotBills = () => {
        api.get(`/spot_bill`, {
            params: {
                id_owner: user.id_user,
                id_spot: spotId,
                reference_date_start: year + "-" + months[currentMonthIndex].value + "-01",
                reference_date_end: year + "-" + months[currentMonthIndex].value + "-" + months[currentMonthIndex].endDay
            },
        }).then((response) => {
            const spotBills: SpotBill[] = response?.data;
			setSpotBills(spotBills);
        }).catch((error) => {
            alert("Algo de errado ocorreu na sua solicitação")
            console.log('Erro na solicitação: ', error);
        })
    }

    useEffect(() => { 
        loadSpots()
        if (spotId !== '' && spotId != null) {
            getSpotBills() 
        }
        }, [currentMonthIndex, spotId, year])

    return (
        <>
            <MainInfoDiv>
                <CloseDiv>
                    <CloseIcon onClick={goBack} size={30}/>
                </CloseDiv>
                <DateSelectorDiv>
                    <BackIcon onClick={() => changeYear(-1)} />
                    <Title>{year}</Title>
                    <ForwardIcon onClick={() => changeYear(1)} />
                </DateSelectorDiv>
                <DateSelectorDiv>
                    <BackIcon onClick={goBackCalendar} />
                    <Value>{months[currentMonthIndex].label}</Value>
                    <ForwardIcon onClick={goForwardCalendar} />
                </DateSelectorDiv>
            </MainInfoDiv>
            <PageContainer>
                <Container>
                    {
                        spotRecommendations && (                     
                            <DropDownInput 
                                recommendations={spotRecommendations} 
                                onSelectItem={(item) => {setSpotId(item.value)}} 
                                label='Local' 
                                inputValue={spotId} 
                                onInputValueChange={setSpotId}
                            />
                        )
                    }
                    {
                        !spotRecommendations && (
                            <WarningTitle>Você não é administrador de nenhum lugar :( </WarningTitle>
                        )
                    }
                    {
                        spotBills.map((spotBill, index) => (
                            <NavLink to={`/spotBill/${spotBill.id_spot_bill}`} style={{ textDecoration: 'none', width: '100%'}}>
                                <PaymentsDiv>
                                    <BillInfo>
                                        <CircularImage src={spotBill.images[0].image_url || BillPic} />
                                        <BillName>{truncateName(spotBill.name)}</BillName>
                                    </BillInfo>
                                    <Price>R$ {spotBill.value}</Price>
                                </PaymentsDiv>
                            </NavLink>
					))
					}
                    <ButtonDiv>
                        <Button>Gerar cotas do mês</Button>
                        <PlusButton disabled={!!spotRecommendations} onClick={() => navigate(`/${spotId}/spotBill/create`)}>
                            <PlusIcon/>
                        </PlusButton>
        		    </ButtonDiv>
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default ListSpotBill