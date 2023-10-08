import styled from 'styled-components'


export const UserImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    & > :first-child {
     margin-bottom: 20px;
  }
`

export const Title = styled.p`
    font-size: 25px;
    color: #2b2b2b;
`

export const AboutSection = styled.div`
    width: 100%;
    font-size: 18px;
    color: #656565;
    font-weight: 400;

    & > :first-child {
     color: #2b2b2b;
     font-size: 22px;
     font-weight: 400;
  }
    
`