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
