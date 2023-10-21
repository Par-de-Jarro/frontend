import styled from 'styled-components'
import { FaSearch, FaMoneyBillWave } from 'react-icons/fa'
import { BsHouses } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

export const SearchIcon = styled(FaSearch)`
  height: 20px;
  width: 20px;
`

export const BillsIcon = styled(FaMoneyBillWave)`
  height: 20px;
  width: 20px;

`

export const HouseIcon = styled(BsHouses)`
  height: 20px;
  width: 20px;

`
export const UserIcon = styled(PiUserCircleFill)`
  height: 30px;
  width: 30px;
`

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 200px;
  height: 60px;
  background-color: #ffffff;
  padding: 0px 35px 0px 35px;
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 0;

  @media (min-width: 768px) {
    /* Estilos para dispositivos móveis (largura máxima de 768px) */
    display: none;
  }
`

export const NavButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;

    &.active {
      svg {
        color: #513422;
      }
    }
    svg {
        color: #cfcfcf;
    }
`
