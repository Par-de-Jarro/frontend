import React, {SelectHTMLAttributes} from 'react';
import {
    SelectDiv,
    SelectBox
} from "./styles"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    options: Array<{
        value: string;
        label:string;
    }>;

}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
    return (
        <SelectDiv>
            <label htmlFor ={name}>{label}</label>
            <SelectBox  value="" id={name} {...rest}>

                <option value="" disabled  hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </SelectBox>
        </SelectDiv>
    );
}

export default Select;