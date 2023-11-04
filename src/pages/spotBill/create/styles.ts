import { IoClose } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import styled from "styled-components"
import cameraIcon from '../../../styles/assets/cameraIcon.png'

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`

export const ImageUploaderDiv = styled.div`
  width: 100%;
  background-color: blue;
  color: black;
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
  color: #6e9778;
  cursor: pointer;
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #c9834a;
`

export const TitleContainer = styled.div`
  display: flex;
  font-size: 22px;
  flex-direction: column;
  width: 100%;
  color: #c9834a;
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

    margin-top: 20px;


    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

export const ImageInput = styled.input`
  cursor: pointer;
  height: 100px;
  width: 100px;
  position:absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0;
  -moz-opacity: 0;
  border-radius: 16px;
`
export const ImagesDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px; 
  justify-items: center; 
  align-items: center; 
  margin-bottom: 20px;
`

export const ImageInputWrapper = styled.div`
  height: 105px;
  width: 105px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  background-image: url(${cameraIcon}); 
  background-size: 62%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECECEC;
`
export const SpotImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 16px;
    padding: 5px;
    border: 2px solid #ccc;
`

export const CheckBoxDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  gap: 5px; 
  max-height: 150px;
  margin-bottom: 20px;
`;