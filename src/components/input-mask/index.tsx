import React from 'react';
import {Container, InputContainer, Input, Label} from './styles';

interface InputProps {
    label?: string;
    mask: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
  }
  
  const MaskInput: React.FC<InputProps> = ({label, mask, value, onChange}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer>
              <Input 
                mask={mask}
                value={value}
                onChange={onChange}/>
            </InputContainer>
        </Container>
    );
  }
  
  export default MaskInput;