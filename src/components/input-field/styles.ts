import styled from "styled-components";
import { SlLocationPin } from 'react-icons/sl'

export const Label = styled.p`
  width: 100%;
  font-size: 12px;
  color: #513422;
  margin-bottom: 2px;
  text-align: left;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding-left: 15px;
  position: relative;
  border: 0;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 25px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 25px;
  list-style: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: 400px;
  overflow: scroll;

  @media (max-width: 768px) {
    width: 350px 
  }
  
  @media (min-width: 769px) {
    width: 500px;
  }

`;
export const DropdownItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 25px 10px 25px 10px;
  max-height: 100px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }

  color: #222222;
`;


export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  min-height: 45px;
  background-color: #ebebeb;
  border-radius: 10px;
`

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`