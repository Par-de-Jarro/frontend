import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const UserContainer = styled(NavLink)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
    text-decoration: none;
    
    &:hover {
        background-color: #f2f2f2;
    }
`

export const Title = styled.p`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 25px;
    color: #2b2b2b;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
    
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #717171;
    font-size: 14px;
    gap: 5px;
`

export const UserName = styled.p`
    font-size: 18px;
    color: #2b2b2b;
    width: 400;
`

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;

`