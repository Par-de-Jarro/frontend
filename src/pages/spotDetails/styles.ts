import styled from "styled-components"
import { SlLocationPin } from "react-icons/sl"

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
    flex-direction: row; 
    justify-content: space-between;
`

export const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  max-height: 80px;
  color: #222222;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
  text-decoration: none;  
  
  & > :first-child {
    margin-right: 25px; 
  }
`

export const LocationIcon = styled(SlLocationPin)`
  height: 23px;
  width: 23px;
`
