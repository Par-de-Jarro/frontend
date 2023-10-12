import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 50px;
  max-height: 80px;
  color: #222222;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0px 10px 0px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }
  
`

export const IconLabelContainer = styled.div`
  display: flex;
  justify-content: left;
  padding-left: 20px;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
`