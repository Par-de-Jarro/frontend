import React, {useState, useEffect} from 'react'
import PageContainer from '../../components/page-container'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, NavLink } from 'react-router-dom';

import UserPic from '../../styles/assets/User.jpg'

import { RequestDiv, Title, RequesterImage, RequesterInfo, RequesterName, ButtonsDiv, RejectIcon, CheckIcon} from './styles';

const SpotRequests: React.FC = () => {

    const truncateName = (name: string) => {
        const maxSize = 18
        if (name.length <= maxSize) {
          return name
        } else {
          const truncatedName = name.slice(0, maxSize) + '...';
          return truncatedName
        }
    }
    
    const name = "requester requester requester"
    return (
        <>
            <PageContainer>
                <Title>Solicitações</Title>
                <RequestDiv>
                    <RequesterInfo>
                        <NavLink to={'/signIn'} style={{ textDecoration: 'none' }}>
                            <RequesterImage src={UserPic} />
                        </NavLink>
                        <RequesterName>{truncateName(name)}</RequesterName>
                    </RequesterInfo>
                    <ButtonsDiv>
                        <CheckIcon />
                        <RejectIcon />
                    </ButtonsDiv>
                </RequestDiv>
            </PageContainer>
        </>
      )
  }
  
  export default SpotRequests