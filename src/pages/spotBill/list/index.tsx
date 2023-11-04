import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import { } from './styles'
import { MainInfoDiv, CloseIcon, FemaleIcon, CloseDiv, Title, Value, RequesterName, Container, ButtonDiv, PlusIcon, Price, PlusButton, PaymentsDiv, RequesterInfo, RequesterImage } from './styles';
import DropDownInput from '../../../components/dropdown-input'
import { useAuth } from '../../../hooks/auth'
import {Spot} from '../../../types/spot'
import {SpotBill} from '../../../types/spotBill'
import { useNavigate, NavLink } from 'react-router-dom';
import BillPic from '../../../styles/assets/bill.png'
import { DropdownItem } from '../../../types/input';


const ListSpotBill: React.FC = () => {
    const [spot, setSpot] = useState<Spot>()
    const [spotBills, setSpotBills] = useState<SpotBill[]>([])
    const spotId = '4bc6d78f-598b-4230-866d-0cd45d1f762b'
    const { user } = useAuth()
    const [gender, setGender] = useState(user.gender)
    const [genderRecommendations, setGenderRecommendations] = useState<Array<DropdownItem>>([])
    const id = "4bc6d78f-598b-4230-866d-0cd45d1f762b"

    const navigate = useNavigate();
  
	const goBack = () => {
		navigate(-1);
	}

    const getGenders = () => {
        const genders = [
          {
            value: "female",
            label: "Feminino",
            icon: (<FemaleIcon/>)
          },
          {
            value: "male",
            label: "Masculino",
            icon: (<FemaleIcon/>)
          },
          {
            value: "non-binary",
            label: "Não binário",
            icon: (<FemaleIcon/>)
          },
          {
            value: "uninformed",
            label: "Não informado",
            icon: (<FemaleIcon/>)
          }
        ]
    
        setGenderRecommendations(genders)
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

    const getSpotBills = () => {
        api.get(`/spot_bill`, {
            params: {
                id_owner: user.id_user
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
        getGenders()
        getSpotBills() }, [])

    const name = "name name name name"

    return (
        <>
            <MainInfoDiv>
                <CloseDiv>
                    <CloseIcon onClick={goBack} size={30}/>
                </CloseDiv>
                <Title>2023</Title>
                <Value>Novembro</Value>
            </MainInfoDiv>
            <PageContainer>
                <Container>
                    <DropDownInput 
                        recommendations={genderRecommendations} 
                        onSelectItem={(item) => {setGender(item.value)}} 
                        label='Local' 
                        inputValue={gender} 
                        onInputValueChange={setGender}
                    />
                    {
                        spotBills.map((spotBill, index) => (
                            <NavLink to={`/spotBill/${spotBill.id_spot_bill}`} style={{ textDecoration: 'none', width: '100%'}}>
                                <PaymentsDiv>
                                    <RequesterInfo>
                                        <RequesterImage src={spotBill.images[0].image_url || BillPic} />
                                    <RequesterName>{truncateName(spotBill.name)}</RequesterName>
                                    </RequesterInfo>
                                    <Price>R$ {spotBill.value}</Price>
                                </PaymentsDiv>
                            </NavLink>
					))
					}
                    <ButtonDiv>
                        <PlusButton onClick={() => navigate(`/${spotId}/spotBill/create`)}>
                            <PlusIcon/>
                        </PlusButton>
        		    </ButtonDiv>
                </Container>
            </PageContainer>
        </>
      )
  }
  
  export default ListSpotBill