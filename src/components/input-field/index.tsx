import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, Input, InputContainer, Label } from './styles';
import { Recommendation } from '../../types/input';

interface InputFieldProps {
  recommendations?: Array<Recommendation>
  onSelectItem?: (item: Recommendation) => void;
  onSearch?: (item: string) => void;
  inputValue: string
  onInputValueChange: (value: string) => void
  label?: string
}

const InputField: React.FC<InputFieldProps> = ({ onSearch, onSelectItem, onInputValueChange, inputValue, recommendations, label }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputValueChange(event.target.value)
    if (onSearch) {
        onSearch(event.target.value)
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option: Recommendation) => {    
    onInputValueChange(option.value)
    setShowDropdown(false);

    if (onSelectItem) {
      onSelectItem(option)
    }
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