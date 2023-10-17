import styled from 'styled-components'
import { IoMdFemale, IoMdMale } from "react-icons/io"
import { PiGenderNonbinaryBold } from 'react-icons/pi'
import { AiOutlineMinusSquare } from 'react-icons/ai'
import { SlLocationPin } from "react-icons/sl"
import cameraIcon from '../../styles/assets/cameraIcon.png'
import { IoClose } from 'react-icons/io5'

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`

export const FemaleIcon = styled(IoMdFemale)`
  height: 23px;
  width: 23px;
`

export const MaleIcon = styled(IoMdMale)`
  height: 23px;
  width: 23px;
`
export const NonBinaryIcon = styled(PiGenderNonbinaryBold)`
  height: 23px;
  width: 23px;
`

export const UninformedGenderIcon = styled(AiOutlineMinusSquare)`
  height: 23px;
  width: 23px;
`

export const ProfileDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
    color: #717171;
`

export const UserImage = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
`

export const ImageInput = styled.input`
  cursor: pointer;
  height: 30px;
  width: 30px;
  position:absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0;
  -moz-opacity: 0;
  border-radius: 50%;
`

export const ImageInputWrapper = styled.div`
  height: 35px;
  width: 35px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${cameraIcon}); 
  background-size: 62%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECECEC;
`

export const UserInfo = styled.div`
    width: 100%;
    height: 80px;
    margin-bottom: 25px;

    @media (min-width: 768px) { 
        max-width: 700px;
    }
`

export const UserInfoTitle = styled.p`
    font-weight: bold;
    font-size: 18px;
`

export const UserInfoValue = styled.div`
    font-size: 22px;
    border-bottom: 1px solid #f0f0f0; 
    border-radius: 14px;    
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); 
    padding: 16px;      
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
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
