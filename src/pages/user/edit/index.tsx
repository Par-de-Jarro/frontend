import { Box, Avatar, Wrap, WrapItem, Center } from '@chakra-ui/react'

import Logo from "../../../components/logo";
import { EditIcon } from '../../../components/edit_icon';
import EditForm from '../../../components/edit_form';

export default function EditUser() {

    return <Box>
        <Box minW={60} p={2}>
            <Logo />
        </Box>
        <Center gap={4} p={2}>
            <Wrap>
                <WrapItem>
                    <Avatar
                        size='2xl'
                        name="User"
                        bg='primaryLight'
                    />
                </WrapItem>
                <WrapItem alignSelf='end'>
                    <EditIcon boxSize='1.2em' />
                </WrapItem>
            </Wrap>
            <Wrap>
                <EditForm />
            </Wrap>
        </Center>
    </Box>
}