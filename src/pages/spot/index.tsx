import PageContainer from '../../components/page-container'
import Input from '../../components/input'
import CustomNumberInput from '../../components/numeric-input'

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
    const [roomsQuantity, setRoomsQuantity] = useState(0)
    const [bathroomsQuantity, setBathroomsQuantity] = useState(0)
    const [hasElevator, setHasElevator] = useState(false)
    const [allowPet, setAllowPet] = useState(false)
    const [allowSmoker, setAllowSmoker] = useState(false)
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const createSpot = async () => {

        const key = {
            "convenience": {
                "rooms_quantity": roomsQuantity,
                "bathrooms_quantity": bathroomsQuantity,
                "has_elevator": hasElevator
            },
            "allowance": {
                "allow_pet": allowPet,
                "allow_smoker": allowSmoker
            }
        }

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
                <TitleContainer>
                    <Title>Detalhes de um local</Title>
                </TitleContainer>
                <Input
                    label='Quantidade de Quartos'
                    inputValue={roomsQuantity.toString()}
                    onInputValueChange={(value) => setRoomsQuantity(parseInt(value))}
                    type='number'
                />
                <Input
                    label='Quantidade de Banheiros'
                    inputValue={bathroomsQuantity.toString()}
                    onInputValueChange={(value) => setBathroomsQuantity(parseInt(value))}
                    type='number'
                />
                <Input
                    label='Tem elevador'
                    inputValue={hasElevator.toString()}
                    onInputValueChange={(value) => setHasElevator(value == "true")}
                    type='checkbox'
                />
                <Input
                    label='Permite Pets'
                    inputValue={allowPet.toString()}
                    onInputValueChange={(value) => setAllowPet(value == "true")}
                    type='checkbox'
                />
                <Input
                    label='Permite Fumantes'
                    inputValue={allowSmoker.toString()}
                    onInputValueChange={(value) => setAllowSmoker(value == "true")}
                    type='checkbox'
                />
                <Button onClick={createSpot}>Continuar</Button>
            </Form>

        </PageContainer>
    )
}