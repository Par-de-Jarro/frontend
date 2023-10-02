import styled from 'styled-components'

export const ProfileDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
    color: #717171;
`

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 30px;
`

export const UserInfoDiv = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
`

export const UserInfoTitle = styled.p`
    font-weight: bold;
    font-size: 18px;
`

export const UserInfoValue = styled.div`
    font-size: 22px;
    border-bottom: 1px solid #f0f0f0; 
    border-radius: 14px;    
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); 
    padding: 16px;      
`