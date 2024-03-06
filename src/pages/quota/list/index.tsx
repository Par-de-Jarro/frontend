import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import {
    MainInfoDiv, CloseIcon, BackIcon, CloseDiv, Title,
    ForwardIcon, Value, DateSelectorDiv, BillName, Container,
    Price, PaymentsDiv, BillInfo, CircularImage, WarningTitle, Status, PaymentInfoDiv
} from './styles';
import { useAuth } from '../../../hooks/auth'
import { useNavigate } from 'react-router-dom';
import BillPic from '../../../styles/assets/bill.png'
import { Quota } from '../../../types/quota'
import PayQuotaModal from '../../../components/pay_quota_modal';
import NavBar from '../../../components/nav-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const QuotaList: React.FC = () => {
    const months = [
        { label: "Janeiro", value: "01", endDay: "31" }, { label: "Fevereiro", value: "02", endDay: "28" }, { label: "Março", value: "03", endDay: "31" },
        { label: "Abril", value: "04", endDay: "30" }, { label: "Maio", value: "05", endDay: "31" }, { label: "Junho", value: "06", endDay: "30" },
        { label: "Julho", value: "07", endDay: "31" }, { label: "Agosto", value: "08", endDay: "31" }, { label: "Setembro", value: "09", endDay: "30" },
        { label: "Outubro", value: "10", endDay: "31" }, { label: "Novembro", value: "11", endDay: "30" }, { label: "Dezembro", value: "12", endDay: "31" }
    ];

    const date = new Date();
    const [currentMonthIndex, setCurrentMonthIndex] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    const [quotas, setQuotas] = useState<Quota[]>([])
    const { user } = useAuth()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedQuota, setSelectedQuota] = useState<Quota>({} as Quota)

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
            toast.error("Algo de errado ocorreu na sua solicitação")
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
                    <CloseIcon onClick={goBack} size={30} />
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
                    {isModalOpen && <PayQuotaModal onClose={() => { setIsModalOpen(false) }} quota={selectedQuota}></PayQuotaModal>}
                    {
                        !quotas && (
                            <WarningTitle>Você não possui contas :) </WarningTitle>
                        )
                    }
                    {
                        quotas.map((quota, index) => (
                            <PaymentsDiv onClick={() => { setIsModalOpen(true); setSelectedQuota(quota) }}>
                                <BillInfo>
                                    <CircularImage src={
                                        quota.spot_bill.images != null && quota.spot_bill.images.length > 0 ?
                                            quota.spot_bill.images[0] :
                                            BillPic} />
                                    <BillName>{truncateName(quota.spot_bill.name)}</BillName>
                                </BillInfo>
                                <PaymentInfoDiv>
                                    <Status>{quota.status === 'PAYED' ? 'Pago' : 'Pendente'}</Status>
                                    <Price>R$ ${quota.value.toFixed(2)}</Price>
                                </PaymentInfoDiv>
                            </PaymentsDiv>
                        ))
                    }
                </Container>
            </PageContainer>
            <NavBar/>
        </>
    )
}

export default QuotaList