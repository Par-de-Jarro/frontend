import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, Input, InputContainer, Label } from './styles';
import { DropdownItem } from '../../types/input';

interface DropdownInputFieldProps {
  recommendations: Array<DropdownItem>
  inputValue: string
  onInputValueChange: (value: string) => void
  onSelectItem: (item: DropdownItem) => void;
  label?: string
}

const DropdownInputFields: React.FC<DropdownInputFieldProps> = ({ onSelectItem, onInputValueChange, inputValue, recommendations, label }: DropdownInputFieldProps ) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showDropdown, setShowDropdown] = useState(false)
  const [internalValue, setInternalValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputValueChange(event.target.value)
    setInternalValue(event.target.value)
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
    setInternalValue(option.label)
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (recommendations) {
      const aux = recommendations.filter(elem => elem.value === inputValue)[0]?.label
      
      
      if (aux) {
        
        setInternalValue(aux);
        return
        
      }
      setInternalValue(inputValue)
      return
    }
    setInternalValue(inputValue)
    return
  },[recommendations, inputValue])

  return (
    <InputContainer ref={inputRef}>
      { label && (
          <Label>
            {label}
          </Label>
        ) 
      }
      <Input 
        value={internalValue} 
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


export default DropdownInputFields