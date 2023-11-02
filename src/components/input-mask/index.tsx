import React, {InputHTMLAttributes} from 'react';
import {Container, InputContainer, Label} from './styles';

const { InputMask } = require("react-input-mask");

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    prefix?: string;
    mask: string;
  }
  
  const MaskInput: React.FC<InputProps> = ({label, mask, ...rest}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer>
              <InputMask mask={mask} {...rest} />
            </InputContainer>
        </Container>
    );
  }
  
  export default MaskInput;