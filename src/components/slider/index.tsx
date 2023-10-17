import * as React from 'react';

import SimpleInput from '../simple-input';
import { useState } from 'react';
import { Container, CustomSlider, InputContainer, Split } from './styles';


interface RangeSliderModal {
  value: number[]
  onChange: (newValue:  number[]) => void
  prefix?: string
}

const RangeSlider: React.FC<RangeSliderModal> = ({ value, onChange, prefix }) => {
  const [min, setMin] = useState(value[0])
  const [max, setMax] = useState(value[1])

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    value = newValue as number[]
    setMin(value[0])
    setMax(value[1])
    onChange([min, max]);
  };

  const handleMinChange = (changeValue: string) => {
    const minValue = changeValue ? parseInt(changeValue) : 0
    setMin(minValue)
    onChange([minValue, max])

  }

  const handleMaxChange = (changeValue: string) => {
    const maxValue = changeValue ? parseInt(changeValue) : 2000
    setMax(maxValue)   
    onChange([min, maxValue])    
  }

  return (
    <Container>
      <CustomSlider
        min={0}
        max={2000}
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
      />
      <InputContainer>
          <SimpleInput prefix={prefix} label='Valor Mínimo' value={min.toString()} onChange={(e) => { handleMinChange(e.target.value) }}/>
          <Split> - </Split>
          <SimpleInput prefix={prefix} label='Valor Máximo' value={max.toString()} onChange={(e) => { handleMaxChange(e.target.value) }}/>
      </InputContainer>
    </Container>
  );
}

export default RangeSlider