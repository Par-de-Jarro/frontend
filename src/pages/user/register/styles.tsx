import styled from "styled-components";
import cityBackground from '../../../assets/images/CityBackground.png';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${cityBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
`

export const Header = styled.div`
    width: 100%;
    height: 70px; 
    position: fixed;
    top: 0;
    margin-left: 35px; 
    margin-top: 15px;
`

export const CentralDiv = styled.div`
    width: 75%; 
    height: 80%;
    margin: 0 auto; 
    background-color: var(--color-primary-lighter);
    color: var(--color-secondary); 
    font-size: 20px;
    border-radius: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px 20px 60px; 
`

export const Form = styled.form`
    width: 100%; 
    hight: 100%;
    margin-top: 40px;
`

export const FormDiv = styled.form`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const FieldSet = styled.div`
    width: 100%; 
` 
  