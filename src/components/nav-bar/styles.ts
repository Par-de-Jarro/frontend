import styled, { css } from "styled-components";
import { FaSearch, FaMoneyBillWave } from 'react-icons/fa'
import { BsHouses } from 'react-icons/bs'
import { PiUserCircleFill } from 'react-icons/pi'

interface IconProps {
  isSelected?: boolean
}

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

export const Container = styled.div`
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
`;

export const NavButton = styled.button<IconProps>`
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

    svg {
        color: #cfcfcf;
    }

    ${(props) => props.isSelected && css`
      svg {
        color: #513422;
      }
  `}
`