import styled from "styled-components"
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const Title = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #2b2b2b;
`

export const WarningTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #2b2b2b;
    text-align: center;
`

export const Value = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #2b2b2b;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: #717171;
`
export const MainInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const CloseIcon = styled(AiOutlineCloseCircle)`
  height: 27px;
  width: 27px;
  color: black;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
`

export const SpotDiv = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    color: black;

    & > :first-child {
    margin-right: 15px; 
  }
`

export const CircularImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
    margin-right: 10px;
`

export const PaymentsDiv = styled.div`
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


export const BillInfo = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BillName = styled.p`
    font-size: 16px;
    color: #5e5e5d;
`

export const Price = styled.p`
    width: 30%;
    font-size: 14px;
    color: black;
`
export const CloseDiv = styled.div`
    width: 100%;
    padding-left: 20px;
    padding-top: 10px;
`

export const PlusIcon = styled(BsPlusLg)`
    width: 30px;
    height: 30px;
`

export const ButtonDiv = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: fixed;
    bottom: 0;
`

export const PlusButton = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    color: #513422;
    border-radius: 50%;
    border: 0;
    background-color: #f8f4e8;
    
    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`

export const DateSelectorDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BackIcon = styled(IoIosArrowBack)`
  height: 25px;
  width: 25px;
  color: #d2bc95;
  cursor: pointer;
  margin: 5px;
  
`

export const ForwardIcon = styled(IoIosArrowForward)`
  height: 25px;
  width: 25px;
  color: #d2bc95;
  cursor: pointer;
  margin: 5px;
  
`
