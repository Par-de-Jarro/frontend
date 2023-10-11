import { IoClose } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import styled from "styled-components"

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const CloseIcon = styled(IoClose)`
  height: 25px;
  width: 25px;
  color: #513422;
  cursor: pointer;
`

export const Title = styled.p`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 22px;
    color: #2b2b2b;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`

export const Button = styled.button`
    border: 0;
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
