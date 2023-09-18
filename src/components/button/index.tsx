import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import '../../assets/styles/global.css';

interface ButtonProps {
    text: string,
    borderRadius?: number,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
const ButtonArrow: React.FC<ButtonProps> = ({ text, borderRadius, onClick }) => {
    return (
        <ChakraButton
            minW={24}
            borderRadius={borderRadius ?? 0}
            bgColor={'var(--color-primary-lighter)'}
            color='white'
            onClick={onClick}
        >
            {text}<ChevronRightIcon h={7} w={6} color='white' />
        </ChakraButton>
    )
}

export default ButtonArrow;