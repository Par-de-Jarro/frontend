import PageContainer from '../../components/page-container'
import Input from '../../components/dropdown-input'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Button, CloseIcon, Div, Title, TitleContainer, LocationIcon, ImageInputWrapper, ImageInput, SpotImage, ImagesDiv } from './styles'
import { DropdownItem } from '../../types/input';
import SimpleInput from '../../components/simple-input'

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
    const [typeRecommendations, setTypesRecommendations] = useState<Array<DropdownItem>>([])
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    
    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1);
    }

    const uploadImage = (files: File[], spotId: string) => {
        let formData = new FormData();
  
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
          });
  
        api.post(`/spot/${spotId}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        })
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Image upload failed:', error);
        });
       
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
            if (imageFiles.length > 0) {
                uploadImage(imageFiles, data.id_spot);
            }
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

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
      
        if (selectedFiles.length > 0) {
          const newFiles = [...imageFiles, ...Array.from(selectedFiles)];
          const newPreviews = Array.from(selectedFiles).map((file) => URL.createObjectURL(file));
      
          setImageFiles(newFiles);
          setImagePreviews([...imagePreviews, ...newPreviews]);
        }
    };

    useEffect(() => {
        getTypes()
    }, [imageFiles])

    return (
        <PageContainer>
            <Div>
                <TitleContainer>
                    <CloseIcon onClick={goBack} size={30} color='black' />
                    <Title>Cadastre um local</Title>
                </TitleContainer>
                <ImagesDiv>
                    {
                        imagePreviews.map((imageUrl: string) => (
                            <SpotImage src={imageUrl}/>
                        ))
                    }
                    <ImageInputWrapper>
                        <ImageInput type="file" accept="image/*" onChange={selectImage}></ImageInput>
                    </ImageInputWrapper>
                </ImagesDiv>
                <SimpleInput
                    label='Nome do local'
                    value={name}
                    onChange={(e) => { setName(e.target.value) } }
                />
                <SimpleInput
                    label='Descrição do local'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) } }
                />
                <Input
                    recommendations={typeRecommendations}
                    onSelectItem={(item) => { setType(item.value) }}
                    label='Tipo de Local'
                    inputValue={type}
                    onInputValueChange={setType}
                />
                <SimpleInput
                    label='Aluguel'
                    value={personalQuota.toString()}
                    onChange={(e) => setPersonalQuota(parseInt(e.target.value))}
                />
                <SimpleInput
                    label='Valor'
                    value={value.toString()}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                />
                <SimpleInput
                    label='Rua'
                    value={street}
                    onChange={(e) => { setStreet(e.target.value) }}
                />
                <SimpleInput
                    label='Cidade'
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />
                <SimpleInput
                    label='CEP'
                    value={zipcode}
                    onChange={(e) => { setZipcode(e.target.value) }}
                />
                <SimpleInput
                    label='Número do local'
                    value={number}
                    onChange={(e) => { setNumber(e.target.value) }}
                />
                <SimpleInput
                    label='Estado'
                    value={state}
                    onChange={(e) => { setState(e.target.value) }}
                />
                <TitleContainer>
                    <Title>Detalhes de um local</Title>
                </TitleContainer>
                <SimpleInput
                    label='Quantidade de Quartos'
                    value={roomsQuantity.toString()}
                    onChange={(e) => { setRoomsQuantity(parseInt(e.target.value)) }}
                    type='number'
                /> 
                <SimpleInput
                    label='Quantidade de Banheiros'
                    value={bathroomsQuantity.toString()}
                    onChange={(e) => { setBathroomsQuantity(parseInt(e.target.value)) }}
                    type='number'
                />
                <SimpleInput
                    label='Tem elevador'
                    value={hasElevator.toString()}
                    onChange={(e) => { setHasElevator(e.target.value === '') }}
                    type='checkbox'
                />
                <SimpleInput
                    label='Permite Pets'
                    value={allowPet.toString()}
                    onChange={(e) => { setAllowPet(e.target.value === '') }}
                    type='checkbox'
                />
                <SimpleInput
                    label='Permite Fumantes'
                    value={allowSmoker.toString()}
                    onChange={(e) => { setAllowSmoker(e.target.value === '') }}
                    type='checkbox'
                />
                <Button onClick={createSpot}>Cadastrar</Button>
            </Div>

        </PageContainer>
    )
}