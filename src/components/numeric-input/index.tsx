import * as React from 'react';
import {
    Unstable_NumberInput as NumberInput,
    NumberInputProps
} from '@mui/base/Unstable_NumberInput';
import { StyledInputRoot, StyledInputElement, StyledButton } from './styles'

export default CustomNumberInput = function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>,
    _inputValue: number,
    onInputValueChange?: (value: number) => void
) {
    const handleInputChange: ((event: React.FocusEvent<HTMLInputElement, Element>, value: number) => void) = (event: React.FocusEvent<HTMLInputElement, Element>, value: number) => {
        if (onInputValueChange) {
            onInputValueChange(value)
        }
    };
    return (
        <NumberInput
            onChange={handleInputChange}
            slots={{
                root: StyledInputRoot,
                input: StyledInputElement,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: '▴',
                },
                decrementButton: {
                    children: '▾',
                },
            }}
            {...props}
            ref={ref}
        />
    );
}