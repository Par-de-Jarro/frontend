import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); 
  z-index: 999;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
  width: 100%;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  height: 20px;
  width: 20px;
  color: #2b2b2b;
  cursor: pointer;
  margin-right: 20px;
`


export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`
export const Title = styled.p`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 400;
  width: 100%;
`