import React, {InputHTMLAttributes} from 'react';
import {Container, Input, Label} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  type?: string;
}

const SimpleInput: React.FC<InputProps> = ({label, type, ...rest}) => {
  return (
      <Container>
          <Label>{label}</Label>
          <Input type={type} id={label} {...rest}></Input>
      </Container>
  );
}

export default SimpleInput;