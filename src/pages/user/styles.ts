import styled from 'styled-components'
import { LiaUniversitySolid, LiaBookSolid } from 'react-icons/lia'
import { BsGenderAmbiguous, BsCalendarEvent } from 'react-icons/bs'


export const UserImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 8px solid #ffffff;
`

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #f8dfc1 0%, #f8dfc1 33%, transparent 33%, transparent 100%);
    font-weight: 500;
    height: 230px;
`

export const Title = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: #8a643b;
`

export const AboutSection = styled.div`
    width: 100%;
    font-size: 19px;
    color: #a7a8ac;
    font-weight: 400;
    margin-bottom: 35px;

    & > :first-child {
     color: #6b6c70;
     font-size: 22px;
     font-weight: 400;
     margin-bottom: 15px;
  }
    
`

export const SubInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  max-height: 80px;
  color: #6b6c70;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
  text-decoration: none;  
  
  & > :first-child {
    margin-right: 25px; 
  }
`

export const UniIcon = styled(LiaUniversitySolid)`
  height: 20px;
  width: 20px;
  color: #a7a8ac;
`

export const CourseIcon = styled(LiaBookSolid)`
  height: 20px;
  width: 20px;
  color: #a7a8ac;
`

export const GenderIcon = styled(BsGenderAmbiguous)`
  height: 20px;
  width: 20px;
  color: #a7a8ac;
`

export const AgeIcon = styled(BsCalendarEvent)`
  height: 20px;
  width: 20px;
  color: #a7a8ac;
`