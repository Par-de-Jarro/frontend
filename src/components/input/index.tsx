import React, {InputHTMLAttributes} from 'react';
import {
    InputDiv,
    InputBox
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
            <InputBox type={type} id={name} {...rest}></InputBox>
        </InputDiv>
    );
}

export default Input;