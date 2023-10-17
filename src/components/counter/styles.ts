import styled, { css } from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  align-content: right;
`

export const CounterValue = styled.p`
  font-size: 15px;
  padding: 2px 0px 2px 0px;
  color: #2b2b2b;
  font-weight: 400;
  padding: 0 10px 0 10px;
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  height: 32px;
  width: 32px;
  background-color: white;
  border: 2px solid #cdcdcd;
  color: #717171;
  border-radius: 50%;

  &:hover {
    border-color: black;
    color: black;
  }

  ${(props) => props.disabled && css`
      color: #ececec;
      border-color: #ececec;

      &:hover {
        color: #ececec;
        border-color: #ececec;
      }
  `}
`
