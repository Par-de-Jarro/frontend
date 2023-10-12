import styled from "styled-components"
import { SlLocationPin } from "react-icons/sl"
import { PiHouseLineBold } from 'react-icons/pi'
import { IoBedOutline } from 'react-icons/io5'
import { LuDog, LuCigarette, LuShowerHead } from 'react-icons/lu'
import { FaRegMap } from 'react-icons/fa'
import { LiaMoneyBillWaveSolid} from 'react-icons/lia'
import { AiOutlineCloseCircle} from 'react-icons/ai'

export const SpotTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #2b2b2b;
`

export const SpotContainer = styled.div`
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

    & > :first-child {
    margin-bottom: 15px; 
  }

  & > :last-child {
    margin-bottom: 20px; 
  }
`

export const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  max-height: 80px;
  color: #2b2b2b;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
  text-decoration: none;  
  
  & > :first-child {
    margin-right: 25px; 
  }
`

export const LocationIcon = styled(SlLocationPin)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const HouseIcon = styled(PiHouseLineBold)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const BedIcon = styled(IoBedOutline)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const ShowerIcon = styled(LuShowerHead)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const PetIcon = styled(LuDog)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const MapIcon = styled(FaRegMap)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const CigaretteIcon = styled(LuCigarette)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const MoneyIcon = styled(LiaMoneyBillWaveSolid)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
`

export const CloseIcon = styled(AiOutlineCloseCircle)`
  height: 27px;
  width: 27px;
  color: 	#F5F5F5;
  cursor: pointer;
  position: absolute;
  margin-top: 5px;
  margin-left: 5px;
`

export const MainButton = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: #513422;
    border-radius: 12px;
    border: 0;
    height: 50px;

    background-color: #f8f4e8;
    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) { 
        max-width: 700px;
    }
`
export const OwnerDiv = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    & > :first-child {
    margin-right: 15px; 
  }
`

export const UserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

export const DescriptionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    

    & > :first-child {
     margin-top: 25px; 
     margin-bottom: 10px; 
     color: #2b2b2b;
  }
`
