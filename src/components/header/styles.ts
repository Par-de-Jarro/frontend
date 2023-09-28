import styled from "styled-components";
import SearchBar from "../search-bar";
import { NavLink } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between; 

  width: 100%;
  max-height: 200px;
  height: 85px;
  padding: 10px 35px 10px 35px;

  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;
`;

export const StyledSearchBar = styled(SearchBar)`
  justify-self: center;
`

export const NavIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #513422;
  text-decoration: none;
  font-size: 25px;

  @media (max-width: 768px) {
    /* Estilos para dispositivos móveis (largura máxima de 768px) */
    display: none;
  }
`

export const UserNavIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: right;
  color: #513422;
  text-decoration: none;
  font-size: 25px;

  @media (max-width: 768px) {
    /* Estilos para dispositivos móveis (largura máxima de 768px) */
    display: none;
  }
`

export const UserIcon = styled(PiUserCircleFill)`
  display: flex;
  height: 35px;
  width: 35px;
`