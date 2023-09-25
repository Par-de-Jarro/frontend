import { Heading, Input, Box, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import ButtonArrow from "../button";
import { PinIcon } from '../pin_icon';
import { Link } from 'react-router-dom';

export const HomeSearchBar = () => {
  const handleClick = () => { };

  return <Box p={8} >
    <Heading maxWidth='9em' fontSize='5xl' p='1%' >Encontre o lugar ideal perto da sua universidade</Heading>
    <InputGroup
      maxW={500}
      bg='white'
      borderRadius={21}
      p={4}
      boxShadow='0px 5px 5px 0px rgba(0, 0, 0, 0.25)'
    >
      <InputLeftElement mt={2} fontSize='2em'>
        <PinIcon ml={2} />
      </InputLeftElement>
      <Input variant='unstyled' size='md' color='#606060' />
      <Link to="/search">
        <InputRightElement mt={2} mr={8}>
          <ButtonArrow text="Buscar" borderRadius={40} onClick={handleClick}/>
        </InputRightElement>
      </Link>
    </InputGroup>
  </Box>
}