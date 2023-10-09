import PageContainer from '../../components/page-container'
import Input from '../../components/input'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'
import { Button, CloseIcon, Div, TitleContainer, LocationIcon } from './styles'
import { Title } from '../signUp/styles'
import { Recommendation } from '../../types/input';
export default function AddSpot() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [personalQuota, setPersonalQuota] = useState(0)
    const [value, setValue] = useState(0)
    const [street, setStreet] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [roomsQuantity, setRoomsQuantity] = useState(0)
    const [bathroomsQuantity, setBathroomsQuantity] = useState(0)
    const [hasElevator, setHasElevator] = useState(false)
    const [allowPet, setAllowPet] = useState(false)
    const [allowSmoker, setAllowSmoker] = useState(false)
    const [typeRecommendations, setTypesRecommendations] = useState<Array<Recommendation>>([])
    
    const navigate = useNavigate()
    
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
        try {
            const response = await api.post('/spot/', {
                name,
                description,
                personal_quota: personalQuota,
                type,
                value,
                street,
                zip_code: zipcode,
                number,
                city,
                state,
                key
            })

            if (response.status === 200) {
                const data = response.data
                navigate(`/spot_image/${data.id_spot}`)
            }
        } 
        catch (err) {
            console.log(err);
        }
        
    }

    const getTypes = () => {
        const spot_types = [
            {
                value: "apartment",
                label: "Apartamento",
                icon: (<LocationIcon />)
            },
            {
                value: "house",
                label: "Casa",
                icon: (<LocationIcon />)
            }
        ]
        setTypesRecommendations(spot_types)
    }

    useEffect(() => {
        getTypes()
    }, [])
    return (
        <PageContainer>
            <Div>
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
                    placeholder='Opcional'
                    inputValue={description}
                    onInputValueChange={setDescription}
                />
                <Input
                    recommendations={typeRecommendations}
                    onSelectItem={(item) => { setType(item.value) }}
                    label='Tipo de Local'
                    inputValue={type}

                />
                <Input
                    label='Aluguel'
                    inputValue={personalQuota.toString()}
                    onInputValueChange={(value) => setPersonalQuota(parseInt(value))}
                />
                <Input
                    label='Valor'
                    inputValue={value.toString()}
                    onInputValueChange={(v) => setValue(parseInt(v))}
                />
                <Input
                    label='Rua'
                    inputValue={street}
                    onInputValueChange={setStreet}
                />
                <Input
                    label='Cidade'
                    inputValue={city}
                    onInputValueChange={setCity}
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
                    onInputValueChange={(value) => setHasElevator(value === "")}
                    type='checkbox'
                />
                <Input
                    label='Permite Pets'
                    inputValue={allowPet.toString()}
                    onInputValueChange={(value) => setAllowPet(value === "")}
                    type='checkbox'
                />
                <Input
                    label='Permite Fumantes'
                    inputValue={allowSmoker.toString()}
                    onInputValueChange={(value) => setAllowSmoker(value === "")}
                    type='checkbox'
                />
                <Button onClick={createSpot}>Continuar</Button>
            </Div>

        </PageContainer>
    )
}