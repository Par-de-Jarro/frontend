import { IoClose } from 'react-icons/io5'
import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffff;
  width: 100%;
  height: 100%;
`

export const CardsContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

    }

    @media (min-width: 769px) {
        display: grid;
        grid-auto-flow: column;
    }

    padding: 30px 0px 30px 0px;
    gap: 25px;
    align-items: center;
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
