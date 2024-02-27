import PageContainer from "../../components/page-container";
import Input from "../../components/dropdown-input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
    Button,
    CloseIcon,
    Div,
    Title,
    TitleContainer,
    LocationIcon,
    ImageInputWrapper,
    CheckBoxDiv,
    ImageInput,
    SpotImage,
    ImagesDiv,
} from "./styles";
import { DropdownItem } from "../../types/input";
import SimpleInput from "../../components/simple-input";
import CheckBox from "../../components/checkbox";
import { useAuth } from "../../hooks/auth";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
export default function EditSpot() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [personalQuota, setPersonalQuota] = useState(0);
    const [value, setValue] = useState(0);
    const [roomsQuantity, setRoomsQuantity] = useState(0);
    const [bathroomsQuantity, setBathroomsQuantity] = useState(0);
    const [hasElevator, setHasElevator] = useState(false);
    const [allowPet, setAllowPet] = useState(false);
    const [allowSmoker, setAllowSmoker] = useState(false);
    const [typeRecommendations, setTypesRecommendations] = useState<
        Array<DropdownItem>
    >([]);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const { isTokenExpired, signOut } = useAuth();

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const updateAllowPet = () => {
        const actual = allowPet || false;
        setAllowPet(!actual);
    };

    const updateHasElevator = () => {
        const actual = hasElevator || false;
        setHasElevator(!actual);
    };

    const updateAllowSmoker = () => {
        const actual = allowSmoker || false;
        setAllowSmoker(!actual);
    };
    const { id } = useParams();
    const uploadImage = (files: File[], spotId: string) => {
        let formData = new FormData();

        imageFiles.forEach((file) => {
            formData.append("files", file);
        });

        api
            .post(`/spot/${spotId}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data; boundary=XXXX; charset=utf-8",
                },
            })
            .then((response) => {
                console.log("Image uploaded successfully:", response.data);
                navigate("/mySpots");
            })
            .catch((error) => {
                console.error("Image upload failed:", error);
            });
    };


    const editSpot = async (spotId: string) => {
        const key = {
            convenience: {
                rooms_quantity: roomsQuantity,
                bathrooms_quantity: bathroomsQuantity,
                has_elevator: hasElevator,
            },
            allowance: {
                allow_pet: allowPet,
                allow_smoker: allowSmoker,
            },
        };

        await api
            .put(`/spot/${spotId}`, {
                name,
                description,
                personal_quota: personalQuota,
                type,
                value,
                key,
            })
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data;
                    if (imageFiles.length > 0) {
                        uploadImage(imageFiles, data.id_spot);
                    }
                }
            })
            .catch((error) => {
                console.error("Create spot failed: ", error);
            });
    };

    const signOutIfTokenIsExpired = () => {
        if (isTokenExpired()) {
            signOut();
            navigate("/signIn");
        }
    };

    const getTypes = () => {
        const spot_types = [
            {
                value: "apartment",
                label: "Apartamento",
                icon: <LocationIcon />,
            },
            {
                value: "house",
                label: "Casa",
                icon: <LocationIcon />,
            },
        ];
        setTypesRecommendations(spot_types);
    };

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;

        if (selectedFiles.length > 0) {
            const newFiles = [...imageFiles, ...Array.from(selectedFiles)];
            const newPreviews = Array.from(selectedFiles).map((file) =>
                URL.createObjectURL(file)
            );

            setImageFiles(newFiles);
            setImagePreviews([...imagePreviews, ...newPreviews]);
        }
    };
    const handlePersonalQuotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < 0) {
            toast.error("A quantidade de vagas não pode ser negativa");
            return;
        }
        setPersonalQuota(value);
    };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < 0) {
            toast.error("O valor do aluguel não pode ser negativo");
            return;
        }
        setValue(value);
    };

    const handleRoomsQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < 0) {
            toast.error("A quantidade de quartos não pode ser negativa");
            return;
        }
        setRoomsQuantity(value);
    };

    const handleBathroomsQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value < 0) {
            toast.error("A quantidade de banheiros não pode ser negativa");
            return;
        }
        setBathroomsQuantity(value);
    };

    useEffect(() => {
        signOutIfTokenIsExpired();
        getTypes();
    }, [imageFiles]);

    return (
        <PageContainer>
            <Div>
                <TitleContainer>
                    <CloseIcon onClick={goBack} size={30} color="black" />
                    <Title>Edite um local</Title>
                </TitleContainer>
                <TitleContainer>
                    <p>Imagens</p>
                </TitleContainer>
                <ImagesDiv>
                    {imagePreviews.map((imageUrl: string) => (
                        <SpotImage src={imageUrl} />
                    ))}
                    <ImageInputWrapper>
                        <ImageInput
                            type="file"
                            accept="image/*"
                            onChange={selectImage}
                        ></ImageInput>
                    </ImageInputWrapper>
                </ImagesDiv>
                <TitleContainer>
                    <p>Informações gerais</p>
                </TitleContainer>
                <SimpleInput
                    label="Nome do local"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <SimpleInput
                    label="Descrição do local"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <Input
                    recommendations={typeRecommendations}
                    onSelectItem={(item) => {
                        setType(item.value);
                    }}
                    label="Tipo de Local"
                    inputValue={type}
                    onInputValueChange={setType}
                />
                <SimpleInput
                    label="Quantidade de vagas"
                    value={personalQuota.toString()}
                    onChange={handlePersonalQuotaChange}
                    type="number"
                />

                <SimpleInput
                    label="Aluguel"
                    value={value.toString()}
                    onChange={handleValueChange}
                    type="number"
                    prefix="R$"
                />

                <SimpleInput
                    label="Quantidade de Quartos"
                    value={roomsQuantity.toString()}
                    onChange={handleRoomsQuantityChange}
                    type="number"
                />

                <SimpleInput
                    label="Quantidade de Banheiros"
                    value={bathroomsQuantity.toString()}
                    onChange={handleBathroomsQuantityChange}
                    type="number"
                />
                <CheckBoxDiv>
                    <CheckBox
                        value={hasElevator || false}
                        onChange={updateHasElevator}
                        label="Tem elevador"
                    />
                    <CheckBox
                        value={allowPet || false}
                        onChange={updateAllowPet}
                        label="Permite pets"
                    />
                    <CheckBox
                        value={allowSmoker || false}
                        onChange={updateAllowSmoker}
                        label="Permite fumantes"
                    />
                </CheckBoxDiv>
                <Button onClick={() => { if (id) { editSpot(id) } else { toast.error("Acontece um erro com o id da sua solicitação") } }}>Salvar Edições</Button>
            </Div>
        </PageContainer>
    );
}

