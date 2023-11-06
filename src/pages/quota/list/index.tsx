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
import {Quota} from '../../../types/quota'
import { DropdownItem } from '../../../types/input';


const QuotaList: React.FC = () => {
    const months = [
        {label: "Janeiro", value: "01", endDay: "31"}, {label: "Fevereiro", value: "02", endDay: "28"},{label: "Março", value: "03", endDay: "31"},
        {label: "Abril", value: "04", endDay: "30"},{label: "Maio", value: "05", endDay: "31"},{label: "Junho", value: "06", endDay: "30"},
        {label: "Julho", value: "07", endDay: "31"},{label: "Agosto", value: "08", endDay: "31"},{label: "Setembro", value: "09", endDay: "30"},
        {label: "Outubro", value: "10", endDay: "31"},{label: "Novembro", value: "11", endDay: "30"},{label: "Dezembro", value: "12", endDay: "31"}
    ];

    const [currentMonthIndex, setCurrentMonthIndex] = useState(10);
    const [year, setYear] = useState(2023);
    
    const [quotas, setQuotas] = useState<Quota[]>([])
    const { user } = useAuth()

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


    const truncateName = (name: string) => {
        const maxSize = 20
        if (name.length <= maxSize) {
          return name
        } else {
          const truncatedName = name.slice(0, maxSize) + '...';
          return truncatedName
        }
    }

    const getQuotas = () => {
        api.get(`/personal_quota_payment`, {
            params: {
                id_user: user.id_user,
                reference_date_start: year + "-" + months[currentMonthIndex].value + "-01",
                reference_date_end: year + "-" + months[currentMonthIndex].value + "-" + months[currentMonthIndex].endDay
            },
        }).then((response) => {
            const quotas: Quota[] = response?.data;
			setQuotas(quotas);
        }).catch((error) => {
            alert("Algo de errado ocorreu na sua solicitação")
            console.log('Erro na solicitação: ', error);
        })
    }

    useEffect(() => { 
        getQuotas() 
        }, [currentMonthIndex, year])
    

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
                        !quotas && (
                            <WarningTitle>Você não possui contas :) </WarningTitle>
                        )
                    }
                    {
                        quotas.map((quota, index) => (
                            <PaymentsDiv>
                                <BillInfo>
                                    <CircularImage src={
                                        quota.images != null && quota.images.length > 0 ? 
                                        quota.images[0].image_url : 
                                        BillPic} />
                                    <BillName>{truncateName(quota.spot_bill.name)}</BillName>
                                </BillInfo>
                                <Price>R$ {quota.value.toFixed(2)}</Price>
                            </PaymentsDiv>
					))
					}
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default QuotaList