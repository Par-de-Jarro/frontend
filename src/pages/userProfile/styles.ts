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
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 30px;
`

export const UserInfo = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 25px;

    @media (min-width: 768px) { 
        max-width: 700px;
    }
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

export const MainButton = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: #513422;
    border-radius: 12px;
    border: 0;
    height: 50px;

    background-color: #f8f4e8;
    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) { 
        max-width: 700px;
    }
`