import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 380px;
    cursor: pointer;
`

export const CardImage = styled.img`
    width: 100%;
    height: 68%;
    border-radius: 12px;
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