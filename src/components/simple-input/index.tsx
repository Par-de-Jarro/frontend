import React, {InputHTMLAttributes} from 'react';
import {Container, Input, InputContainer, InputPrefix, Label} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  type?: string;
  prefix?: string
}

const SimpleInput: React.FC<InputProps> = ({label, type, prefix, ...rest}) => {
  return (
      <Container>
          <Label>{label}</Label>
          <InputContainer>
            {prefix && <InputPrefix>{prefix}</InputPrefix>}
            <Input type={type} id={label} {...rest} />
          </InputContainer>
      </Container>
  );
}

export default SimpleInput;