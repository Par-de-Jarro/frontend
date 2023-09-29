import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import styled from 'styled-components';

interface Location {
  name: string;
  lat: number;
  lng: number;
}

const InputWrapper = styled.input`
  width: 100%;
  height: 100%;
  
`

interface AutocompleteInputProps {
  onSelectLocation: (location: Location) => void;
}


const AutocompleteInput: React.FC<AutocompleteInputProps> = ({ onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)


  useEffect(() => {
    console.log(debouncedSearchTerm);
    
  }, [debouncedSearchTerm])

  return (
    <InputWrapper onChange={(event) => { setSearchTerm(event.target.value) }}>
    </InputWrapper>
  )
};


export default AutocompleteInput