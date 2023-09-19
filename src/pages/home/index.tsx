import { Center, Flex, Box } from '@chakra-ui/react'

import Logo from "../../components/logo";
import { HomeSearchBar } from '../../components/search_bar/home';
import { HomeHeader } from '../../components/home_header';

function Home() {
  return <Flex>
    <Center ml={4} h='10vh' minW={100} >
      <Logo />
    </Center>
    <Box bg='primaryLight' color="white" borderBottomRadius='13' w='100%' h='24%'>
      <HomeHeader />
      <HomeSearchBar />
    </Box>
  </Flex>
}

export default Home;
