import styled from "styled-components"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

export const Title = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #c9834a;
    margin-bottom: 20px;
`

export const RequestDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee; 
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2); 
  border-radius: 16px;
  padding: 7px;
`

export const RequesterInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

export const RequesterImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-right: 10px;
`

export const RequesterName = styled.p`
    font-size: 16px;
    color: #5e5e5d;
`

export const ButtonsDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const CheckIcon = styled(AiOutlineCheckCircle)`
  height: 30px;
  width: 30px;
  color: #64a86a;
  cursor: pointer;
  margin-right: 10px;
`

export const RejectIcon = styled(AiOutlineCloseCircle)`
  height: 30px;
  width: 30px;
  color: #c0c1c5;
  cursor: pointer;
`
