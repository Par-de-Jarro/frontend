import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const UserContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 10px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 100px;

    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 20px;
`
