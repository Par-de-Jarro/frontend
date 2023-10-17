import * as React from 'react';

import SimpleInput from '../simple-input';
import { useState } from 'react';
import { Container, CustomSlider, InputContainer, Split } from './styles';


interface RangeSliderModal {
  value?: number[] | number
  onChange: (newValue:  number[] | number) => void
  prefix?: string
  min: number
  max: number
}

const RangeSlider: React.FC<RangeSliderModal> = ({ value, onChange, prefix, min, max }) => {
  const [minInput, setMinInput] = useState<number>(min)
  const [maxInput, setMaxInput] = useState<number>(max)

  const handleSliderChange = (_: any, newValue: number | number[]) => {
    value = newValue as number[]

    if (typeof value == 'number') {
      setMaxInput(value)
      onChange(value)
    } else if (Array.isArray(value)) {
      setMinInput(value[0])
      setMaxInput(value[1])
      onChange([minInput || min, maxInput || max]);
    }
  };

  const handleMinChange = (changeValue: string) => {
    const minValue = changeValue ? parseInt(changeValue) : min
    setMinInput(minValue)   
    onChange([minValue, maxInput])    
  }

  const handleMaxChange = (changeValue: string) => {
    const maxValue = changeValue ? parseInt(changeValue) : max

    if (typeof value == 'number') {
      setMaxInput(maxValue)
      onChange(maxValue)
    }

    if (Array.isArray(value)) {
      setMaxInput(maxValue)
      onChange([minInput, maxValue])
    }

    setMaxInput(maxValue)   
    onChange([minInput, maxValue])    
  }

  return (
    <Container>
      <CustomSlider
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
      />
      <InputContainer>
          { 
            Array.isArray(value) &&           
            <>
              <SimpleInput prefix={prefix} label='Valor Mínimo' value={minInput.toString()} onChange={(e) => { handleMinChange(e.target.value) }}/>
              <Split> - </Split>
            </>
          }
          <SimpleInput prefix={prefix} label='Valor Máximo' value={maxInput.toString()} onChange={(e) => { handleMaxChange(e.target.value) }}/>
      </InputContainer>
    </Container>
  );
}

export default RangeSlider