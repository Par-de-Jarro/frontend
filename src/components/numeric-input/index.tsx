import * as React from 'react';

interface CustomNumberInputProps {
    onInputValueChange: React.ChangeEventHandler<HTMLInputElement>
  }
  
const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
    onInputValueChange
}) => {
    return (
        <input
            onChange={onInputValueChange}
            type='number'
        />
    );
}

export default CustomNumberInput