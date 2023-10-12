import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";
import { DropdownItem } from "../../types/input";
import InputField from "../dropdown-input-field";

interface DropDownInputProps extends InputHTMLAttributes<HTMLInputElement> {
  recommendations: Array<DropdownItem>
  inputValue: string
  onInputValueChange: (value: string) => void
  onSelectItem: (item: DropdownItem) => void;
  label?: string
}

const DropDownInput: React.FC<DropDownInputProps> = ({ recommendations, onSelectItem, inputValue, onInputValueChange, label }: DropDownInputProps) => {  
  return (
      <Container>
        <InputField 
          recommendations={recommendations} 
          onSelectItem={onSelectItem}
          inputValue={inputValue} 
          onInputValueChange={onInputValueChange} 
          label={label}
        />
      </Container>
  )
}

export default DropDownInput