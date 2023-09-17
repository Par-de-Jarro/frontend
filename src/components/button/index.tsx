import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button : React.FC<{}> = () => {
    return (
        <ChakraButton bgColor={'#F1AC81'} color='white'> Buscar </ChakraButton>
    )
}

export default Button;