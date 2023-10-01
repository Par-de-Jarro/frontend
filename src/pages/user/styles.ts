import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const LoggedInUserContainer = styled(NavLink)`
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

export const LoggedOffUserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;

    color: #717171;
`

export const RedirectLink = styled(NavLink)`
    color: #2b2b2b;

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

export const Button = styled(NavLink)`
    height: 50px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items:  center;

    text-decoration: none;
    font-size: 16px;

    background-color: #f8f4e8;
    color: #513422;
    border-radius: 12px;


    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`