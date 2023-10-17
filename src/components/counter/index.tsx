import React from 'react';
import { Button, Container, CounterContainer, CounterValue } from './styles';

interface CounterProps {
  max: number
  min: number
  value: number
  onChange: (value: number) => void
}

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