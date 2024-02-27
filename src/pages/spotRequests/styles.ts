import styled, { css } from "styled-components"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { IoClose } from "react-icons/io5"

export const Title = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #c9834a;
`

export const SecondaryTitle = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #c9834a;
    margin-bottom: 15px;
    margin-top: 30px;
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
  margin-bottom: 8px;
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
export const GeneralRequestInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsDiv = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Button = styled.button`
  height: 32px;
  width: 32px;
  background-color: white;
  border: 2px solid #cdcdcd;
  color: #cdcdcd;
  border-radius: 50%;

  &:hover {
    border-color: black;
    color: black;
  }

  ${(props) => props.disabled && css`
      color: #ececec;
      border-color: #ececec;

      &:hover {
        color: #ececec;
        border-color: #ececec;
      }
  `}
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

export const PendingTitle = styled.p`
    font-size: 14px;
    color: #c0c1c5;
    margin-right: 5px;
`

export const NoRequestsDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 50px;
`

export const NoRequestsTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #c0c1c5;
`

export const CloseIcon = styled(IoClose)`
  height: 30px;
  width: 30px;
  color: #513422;
  cursor: pointer;
  margin-right: 10px;
`

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SpotName = styled.p`
  font-size: 14px;
  color: #a8a9ad;
`

