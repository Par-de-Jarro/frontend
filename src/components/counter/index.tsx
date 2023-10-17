import React from 'react';
import styled, { css } from 'styled-components';

interface CounterProps {
  max: number
  min: number
  value: number
  onChange: (value: number) => void
}

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120px;
  color: black;
  align-content: right;
`

const CounterValue = styled.p`
  font-size: 15px;
  padding: 2px 0px 2px 0px;
  color: #2b2b2b;
  font-weight: 400;
  padding: 0 10px 0 10px;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 91px;
  justify-content: center;
  align-items: center;
`



const Button = styled.button`
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

const Counter: React.FC<CounterProps> = ( { max, min, value, onChange } ) => {
  const onAdd = () => {
    if (value < max) {
      onChange(value + 1)
    }
  } 

  const onSub = () => {
    if (value > min) {
      onChange(value - 1)
    }
  } 
  return (
    <Container>
      <CounterContainer>
        <Button disabled={value <= min} onClick={onSub}> -</Button>
         <CounterValue>{value}</CounterValue>
        <Button disabled={value >= max} onClick={onAdd}>+</Button>
      </CounterContainer>
    </Container>
  );
}

export default Counter;