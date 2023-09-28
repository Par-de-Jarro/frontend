import styled from "styled-components";
import SearchBar from "../search-bar";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`

    @media (max-width: 768px) {
        /* Estilos para dispositivos móveis (largura máxima de 768px) */
        display: flex;
        flex-direction: column;

    }

    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    
  width: 100%;
  max-height: 200px;
  height: 85px;
  background-color: #ffffff;
  padding: 0px 35px 0px 35px;
  border-bottom: 1px solid #ebebeb;
`;

export const StyledSearchBar = styled(SearchBar)`
  justify-self: center;
`

export const Logo = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #513422;
    text-decoration: none;
    font-size: 25px;
  
`