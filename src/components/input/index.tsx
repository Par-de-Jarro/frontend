import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { Recommendation } from "../../types/input";
import InputField from "../input-field";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  recommendations?: Array<Recommendation>
  onSelectItem?: (item: Recommendation) => void;
  onSearch?: (item: string) => void;
  inputValue: string
  onInputValueChange?: (value: string) => void
  label?: string
  type?: string
}

const Input: React.FC<InputProps> = ({ recommendations, onSelectItem, onSearch, inputValue, onInputValueChange, label, type, ...rest }: InputProps) => {  
  return (
      <Container>
        <InputField 
          recommendations={recommendations} 
          onSelectItem={onSelectItem}
          onSearch={onSearch} 
          inputValue={inputValue} 
          onInputValueChange={onInputValueChange} 
          label={label}
          type={type}
          {...rest}
        />
      </Container>
  )
}

export default Input