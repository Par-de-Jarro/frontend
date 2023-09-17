import React, {InputHTMLAttributes} from 'react';
import {
    InputDiv
} from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
    type: string;

}

const Input: React.FC<InputProps> = ({label, name, type, ...rest}) => {
    return (
        <InputDiv>
            <label htmlFor ={name}>{label}</label>
            <input type={type} id={name} {...rest}></input>
        </InputDiv>
    );
}

export default Input;