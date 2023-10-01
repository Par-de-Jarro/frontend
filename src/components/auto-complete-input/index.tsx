import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, InputField, InputContainer, LocationIcon } from './styles';

interface Recommendation {
  description: string
  term: string
}

interface InputProps {
  recommendations: Array<Recommendation>
  onSelectItem: (item: Recommendation) => void;
  onSearch: (item: string) => void;
}

const AutoCompleteInput: React.FC<InputProps> = ({ onSearch, onSelectItem, recommendations }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onSearch(event.target.value)
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option: Recommendation) => {    
    setInputValue(option.description)
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
      <InputField 
        value={inputValue} 
        onClick={() => { setShowDropdown(true) }} 
        onChange={handleInputChange}
      />
      {showDropdown && recommendations.length > 0 && (
        <Dropdown>
          {recommendations.map((option, index) => (
            <DropdownItemContainer key={index} onClick={() => handleOptionClick(option)}>
              <IconContainer>
                <LocationIcon/>
              </IconContainer>            
              {option.description}
            </DropdownItemContainer>
          ))}
        </Dropdown>
      )}
    </InputContainer>
  )
};


export default AutoCompleteInput