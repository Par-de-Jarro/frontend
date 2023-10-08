import styled from 'styled-components'
import { LiaUniversitySolid, LiaBookSolid } from 'react-icons/lia'
import { BsGenderAmbiguous, BsCalendarEvent, BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'


export const UserImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 8px solid #ffffff;
    background-color: #ffffff;
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
    font-weight: 400;
    color: #c9834a;
`

export const AboutSection = styled.div`
    width: 100%;
    font-size: 19px;
    color: #a7a8ac;
    font-weight: 400;
    margin-bottom: 35px;

    & > :first-child {
     color: #c9834a;
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

export const EmailIcon = styled(AiOutlineMail)`
  height: 20px;
  width: 20px;
  color: #c9834a;
`

export const PhoneIcon = styled(BsPhone)`
  height: 20px;
  width: 20px;
  color: #c9834a;
`

export const ContactDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > :first-child {
     color: #c9834a;
     font-size: 22px;
     font-weight: 400;
     margin-bottom: 15px;
     margin-top: 30px;
  }
`

export const BackIcon = styled(IoIosArrowBack)`
  height: 30px;
  width: 30px;
  color: 	#d2bc95;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5px;
`

export const FirstElement = styled.div`
  
  align-self: flex-start; 
  justify-self: flex-start; 
  display: inline-block; 
`;

