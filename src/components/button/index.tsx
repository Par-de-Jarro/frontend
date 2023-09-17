import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
interface ButtonProps {
    text: string
}
const Button : React.FC<ButtonProps> = ({ text }) => {
    return (
        <ChakraButton bgColor={'#F1AC81'} color='white'> 
        <p> {text} </p> 
        <ChevronRightIcon pt={1} h={6} w={6} color='white' />
        </ChakraButton>
    )
}

export default Button;