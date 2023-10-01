import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, Input, InputContainer, Label } from './styles';
import { Recommendation } from '../../types/input';

interface InputFieldProps {
  recommendations?: Array<Recommendation>
  onSelectItem?: (item: Recommendation) => void;
  onSearch?: (item: string) => void;
  inputValue: string
  onInputValueChange?: (value: string) => void
  label?: string
  type?: string
}

const InputField: React.FC<InputFieldProps> = ({ onSearch, onSelectItem, onInputValueChange, inputValue, recommendations, label, type }: InputFieldProps ) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false)
  const [value, setValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (onInputValueChange) {
      onInputValueChange(event.target.value)
    }

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
    if (onInputValueChange) {
      onInputValueChange(option.value)
    }
    
    setValue(option.label)
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
        value={value} 
        onClick={() => { setShowDropdown(true) }} 
        onChange={handleInputChange}
        type={type || 'text'}
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