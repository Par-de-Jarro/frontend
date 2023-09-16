import { Flex, Box, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const HomeHeader = () => {
    return <Flex minWidth='fit-content' alignItems='center' justify='space-between' p={2}>
    <Box p={2}>
      <Button _hover={{bg:'hover'}} bg='white' color='primaryLight' ml={2}>Como funciona</Button>
    </Box>
    <ButtonGroup gap={2} mr={4}>
      <Link to="/login">
        <Button _hover={{bg:'hover'}} bg='transparent' color='white'>Login</Button>
      </Link>
      <Button _hover={{bg:'hover'}} bg='white' color='primaryLight'>Cadastre-se</Button>
    </ButtonGroup>
  </Flex>
}