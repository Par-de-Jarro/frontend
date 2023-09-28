import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
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
