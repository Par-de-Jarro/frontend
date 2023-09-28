import styled from 'styled-components'

export const CardsContainer = styled.div`
    @media (max-width: 768px) {
        /* Estilos para dispositivos móveis (largura máxima de 768px) */
        display: flex;
        flex-direction: column;

    }

    @media (min-width: 769px) {
        /* Estilos para dispositivos desktop (largura mínima de 769px) */
        display: grid;
        grid-auto-flow: column;
    
    }

    padding: 30px 0px 30px 0px;
    gap: 25px;
    align-items: center;
`
