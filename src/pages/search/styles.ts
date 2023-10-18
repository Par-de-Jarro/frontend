import styled from 'styled-components'
import { BsPlusLg } from 'react-icons/bs'


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

    height: 80%;
`

export const PlusButton = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    color: #513422;
    border-radius: 50%;
    border: 0;
    background-color: #f8f4e8;
    
    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

export const PlusIcon = styled(BsPlusLg)`
    width: 30px;
    height: 30px;
`

export const ButtonDiv = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        position: fixed;
        bottom: 0;
    }
`