import styled from 'styled-components'
import { CiImageOff } from 'react-icons/ci'

export const Container = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    height: 380px;
    cursor: pointer;
`

export const CardImage = styled.img`
    width: 100%;
    height: 68%;
    border-radius: 12px;
    background-color: #C3c3c3;
`
export const DefaultCardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 68%;
    border-radius: 12px;
    background-color: #C3c3c3;
`
export const WithoutImageIcon = styled(CiImageOff)`
    height: 150px;
    width: 150px;

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    padding-left: 10px;
    padding-top: 15px;

    width: 100%;
    height: 32%;
`

export const PrimaryText = styled.p`
    font-size: 15px;
    padding: 2px 0px 2px 0px;
    color: #2b2b2b;
    font-weight: 400;
`

export const SecondaryText = styled.p`
    font-size: 13px;
    padding: 2px 0px 2px 0px;
    color: #717171;
    font-weight: 100;
`
export const TagsDiv = styled.div`
width: fit-content;
height: 15%;
border-radius: 5%;
background-color: #D1FAE5;
color: #10B981;
font-size: 12px;
text-align: center;
`