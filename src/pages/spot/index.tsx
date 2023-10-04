import PageContainer from '../../components/page-container'
import Input from '../../components/input'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'
import { Button, CloseIcon, Form, TitleContainer } from './styles'
import { Title } from '../signUp/styles'

export default function AddSpot() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [personalQuota, setPersonalQuota] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [number, setNumber] = useState('')
    const [state, setState] = useState('')
    const [key, setKey] = useState('')
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const createSpot = async () => {
        await api.post('/spot', {
            name,
            description,
            type,
            personalQuota,
            zipcode,
            number,
            state,
            key
        })
        navigate('/spot_image')
    }

    return (
        <PageContainer>
            <Form>
                <TitleContainer>
                    <CloseIcon onClick={goBack} size={30} color='black' />
                    <Title>Cadastre um local</Title>
                </TitleContainer>

                <Input
                    label='Nome do local'
                    inputValue={name}
                    onInputValueChange={setName}
                />
                <Input
                    label='Descrição do local'
                    inputValue={description}
                    onInputValueChange={setDescription}
                />
                <Input
                    label='Tipo do local'
                    inputValue={type}
                    onInputValueChange={setType}
                />
                <Input
                    label='Aluguel'
                    inputValue={personalQuota}
                    onInputValueChange={setPersonalQuota}
                />
                <Input
                    label='CEP'
                    inputValue={zipcode}
                    onInputValueChange={setZipcode}
                />
                <Input
                    label='Número do local'
                    inputValue={number}
                    onInputValueChange={setNumber}
                />
                <Input
                    label='Estado'
                    inputValue={state}
                    onInputValueChange={setState}
                />
                <Input
                    label='Identificador do local'
                    inputValue={key}
                    onInputValueChange={setKey}
                />
                <Button onClick={createSpot}>Continuar</Button>
            </Form>

        </PageContainer>
    )
}