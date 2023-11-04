import React, {useState, useEffect} from 'react'
import PageContainer from '../../components/page-container'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, NavLink } from 'react-router-dom';
import api from "../../services/api";
import { SpotRequest } from '../../types/spotRequest'
import HouseImage from '../../styles/assets/house.jpg'
import { useAuth } from '../../hooks/auth'
import UserPic from '../../styles/assets/User.jpg'

import { 
  RequestDiv, 
  Title, 
  NoRequestsDiv, 
  SpotName, 
  GeneralRequestInfo, 
  RequesterImage, 
  RequesterInfo, 
  NoRequestsTitle, 
  CloseIcon, 
  TitleDiv, 
  RequesterName, 
  ButtonsDiv, 
  RejectIcon, 
  CheckIcon, 
  PendingTitle, 
  SecondaryTitle
} from './styles';

const SpotRequests: React.FC = () => {
    const [requestsMade, setRequestsMade] = useState<SpotRequest[]>([]);
    const [requestsReceived, setRequestsReceived] = useState<SpotRequest[]>([]);

    const { user, isTokenExpired, signOut } = useAuth()

    const navigate = useNavigate()

    const goBack = () => {
      navigate(-1);
    }

    const signOutIfTokenIsExpired = () => {
		if(isTokenExpired()) {
		  signOut()
		  navigate('/signIn')
		}
	  }

    const accept = async (requestId: string) => {
      await api.post(`/spot_entry_request/${requestId}/accept`)
        .then((response) => {
          alert('Request accepted')
          loadRequestsReceived()
          loadRequestsMade()
        })
        .catch((error) => {
          console.error("Error on accepting request: ", error)
        })
    }

    const reject = async (requestId: string) => {
      await api.post(`/spot_entry_request/${requestId}/reject`)
        .then((response) => {
          alert('Request rejected')
          loadRequestsReceived()
          loadRequestsMade()
        })
        .catch((error) => {
        console.error("Error on rejecting request: ", error)
        })
    }


    const loadRequestsMade = async () => {   
		if(user !== undefined) {
			await api.get('/spot_entry_request', {
				params: {
					id_user: user.id_user,
                    status: "REQUEST"
				},
			})
			.then((response) => {
				const requests: SpotRequest[] = response?.data;
				setRequestsMade(requests);
			})
			.catch((error) => {
			console.error("Error on getting requests made: ", error)
			})
		}
    };

    const loadRequestsReceived = async () => {   
		if(user !== undefined) {
			await api.get('/spot_entry_request', {
				params: {
					id_owner: user.id_user,
                    status: "REQUEST"
				},
			})
			.then((response) => {
				const requests: SpotRequest[] = response?.data;
				setRequestsReceived(requests);
			})
			.catch((error) => {
			console.error("Error on getting requests received: ", error)
			})
		}
    };
    
    const truncateName = (name: string) => {
        const maxSize = 18
        if (name.length <= maxSize) {
          return name
        } else {
          const truncatedName = name.slice(0, maxSize) + '...';
          return truncatedName
        }
    }

    useEffect(() => {
      signOutIfTokenIsExpired()
      loadRequestsMade()
      loadRequestsReceived()
	}, [])
    
    return (
        <>
            <PageContainer>
              <TitleDiv>
                <CloseIcon onClick={goBack}/>
                <Title>Solicitações</Title>
              </TitleDiv>
            {requestsReceived.length <= 0 && requestsMade.length <= 0 && (
              <NoRequestsDiv>
                <NoRequestsTitle>Você não possui requisições :( </NoRequestsTitle>
              </NoRequestsDiv>
            )}
            {requestsReceived.length > 0 ? (
                <>
                    <SecondaryTitle>Solicitações Recebidas</SecondaryTitle>
                    {requestsReceived.map((request, index) => (
                        <RequestDiv key={index}>
                            <RequesterInfo>
                                <NavLink to={`/user/${request.user.id_user}`} style={{ textDecoration: 'none' }}>
                                    <RequesterImage src={request.user.profile_img || UserPic} />
                                </NavLink>
                                <GeneralRequestInfo>
                                  <NavLink to={`/spots/${request.spot.id_spot}`} style={{ textDecoration: 'none' }}>
                                    <SpotName>{truncateName(request.spot.name)}</SpotName>
                                  </NavLink>
                                  <RequesterName>{truncateName(request.user.name)}</RequesterName>
                                </GeneralRequestInfo>
                            </RequesterInfo>
                            <ButtonsDiv>
                                <CheckIcon onClick={() => accept(request.id_spot_entry_request)}/>
                                <RejectIcon onClick={() => reject(request.id_spot_entry_request)}/>
                            </ButtonsDiv>
                        </RequestDiv>
                    ))}
                </>
            ) : null}
            {requestsMade.length > 0 ? (
                <>
                    <SecondaryTitle>Solicitações Feitas</SecondaryTitle>
                    {requestsMade.map((request, index) => (
                        <RequestDiv key={index}>
                            <RequesterInfo>
                                <NavLink to={`/spots/${request.spot.id_spot}`} style={{ textDecoration: 'none' }}>
                                    <RequesterImage src={request.spot.images !== null? request.spot.images[0].image_url : HouseImage} />
                                </NavLink>
                                <RequesterName>{truncateName(request.spot.name)}</RequesterName>
                            </RequesterInfo>
                            <PendingTitle>Pendente</PendingTitle>
                        </RequestDiv>
                    ))}
                </>
            ) : null}
            </PageContainer>
        </>
      )
  }
  
  export default SpotRequests