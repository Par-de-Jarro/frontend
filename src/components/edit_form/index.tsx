import { Input, FormControl, FormLabel, Select, Textarea, Grid, GridItem, Button } from '@chakra-ui/react'

import React from 'react';
import { useNavigate } from "react-router-dom";

import ButtonArrow from '../button';

export default function EditForm() {
    let [value, setValue] = React.useState('');
    const navigate = useNavigate();

    let handleInputChange = (e: { target: { value: any; }; }) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //enviar para o back
    }

    return <form onSubmit={handleSubmit}>

        <Grid templateColumns='repeat(2, 1fr)' gap={4}>
            <GridItem >

                <FormControl>
                    <FormLabel mb={1}>Nome</FormLabel>
                    <Input placeholder='Nome Completo' type='text' />
                </FormControl>

                <FormControl>
                    <FormLabel mb={1}>Email</FormLabel>
                    <Input placeholder='Seu e-mail' type='email' />
                </FormControl>

                <FormControl>
                    <FormLabel mb={1}>Universidade</FormLabel>
                    <Select placeholder='Selecione sua universidade'>
                        <option>UNIFACISA</option>
                        <option>UFCG</option>
                        <option>UEPB</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel mb={1}>Curso</FormLabel>
                    <Input type='text' placeholder='Seu curso' />
                </FormControl>

                <Button marginY={4} type='submit' bgColor="primaryLight" color='white'>
                    Editar Perfil
                </Button>

            </GridItem >
            <GridItem gap={2}>
                <FormControl>
                    <FormLabel mb={1}>Data de nascimento</FormLabel>
                    <Input type='date' placeholder='DD/MM/AAAA' />
                </FormControl>

                <FormControl>
                    <FormLabel mb={1}>Identidade de Gênero</FormLabel>
                    <Select placeholder='Selecione'>
                        <option>Mulher (Trans ou Cis)</option>
                        <option>Homem (Trans ou Cis)</option>
                        <option>Gênero Não-Binário</option>
                        <option>Outro</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel mb={1}>Bio</FormLabel>
                    <Textarea
                        value={value}
                        onChange={handleInputChange}
                        size='2xl'
                        height={120}
                    />
                </FormControl>
                <GridItem my={4}>
                    <ButtonArrow text='Meus Locais' borderRadius={12} onClick={() => navigate("/")} />
                </GridItem>
            </GridItem >
        </Grid>
    </form>
}