import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, Input, InputContainer, Label } from './styles';
import { DropdownItem } from '../../types/input';

interface InputFieldProps {
  recommendations: Array<DropdownItem>
  inputValue: string
  onInputValueChange: (value: string) => void
  onSelectItem: (item: DropdownItem) => void;
  label?: string
}

const InputField: React.FC<InputFieldProps> = ({ onSelectItem, onInputValueChange, inputValue, recommendations, label }: InputFieldProps ) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputValueChange(event.target.value)
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option: DropdownItem) => {    
    onInputValueChange(option.value)
    setShowDropdown(false);
    onSelectItem(option)
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <InputContainer ref={inputRef}>
      { label && (
          <Label>
            {label}
          </Label>
        ) 
      }
      <Input 
        value={inputValue} 
        onClick={() => { setShowDropdown(true) }} 
        onChange={handleInputChange}
      />
      {showDropdown && recommendations && recommendations.length > 0  && (
        <Dropdown>
          {recommendations?.map((option, index) => (
            <DropdownItemContainer key={index} onClick={() => handleOptionClick(option)}>
              <IconContainer>
                {option.icon}
              </IconContainer>            
              {option.label}
            </DropdownItemContainer>
          ))}
        </Dropdown>
      )}
    </InputContainer>
  )
};


export default InputField