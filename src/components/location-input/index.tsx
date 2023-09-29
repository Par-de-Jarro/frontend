import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, DropdownItemContainer, IconContainer, Input, InputContainer, LocationIcon } from './styles';
interface Location {
  lat: number;
  lng: number;
}

interface Recommendation {
  description: string
  term: string
}

interface AutocompleteInputProps {
  recommendations: Array<Recommendation>
  onSelectLocation: (location: Location) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ onSelectLocation, recommendations }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option: Recommendation) => {
    console.log(option);
    
    setInputValue(option.term)
    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <InputContainer ref={inputRef}>
      <Input 
        value={inputValue} 
        onClick={() => { setShowDropdown(true) }} 
        onChange={handleInputChange}
      />
      {showDropdown && (
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


export default AutocompleteInput