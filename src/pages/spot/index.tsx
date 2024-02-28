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
import { ToastContainer, toast } from 'react-toastify';
import MaskInput from "../../components/input-mask";

import 'react-toastify/dist/ReactToastify.min.css';

export default function AddSpot() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [personalQuota, setPersonalQuota] = useState(0);
  const [value, setValue] = useState(0);
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
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

  function cep_callback (content: any) {
    if (!("erro" in content)) {
      setCity(content.localidade)
      setState(content.uf)
      setStreet(content.logradouro)
      setNeighborhood(content.bairro)
    }
    else {
      toast.error("Não foi possível autocompletar")
    }
  }
  async function autocomplete_address(zip_code: string) {
    var validacep = /^[0-9]{8}$/;

    if(zip_code === "" || !validacep.test(zip_code)) {
      toast.error("Informe um CEP válido")
      return
    }
    
    const url = `https://viacep.com.br/ws/${zip_code}/json`
    const response = await fetch(new URL(url), {
      method: 'GET',
      headers: {'Content-Type': '*/*; charset=UTF-8'},
      mode: "cors"
    })

    if (response.ok && response.body !== null) {
      cep_callback(await response.json())
    }
    else {
      toast.error("Não foi possível autocompletar")
    }
  }

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
        toast.success("Image uploaded successfully:", response.data);
        navigate("/mySpots");
      })
      .catch((error) => {
        toast.error("Não foi possível carregar a imagem no servidor")
        console.error("Image upload failed:", error);
      });
  };

  const createSpot = async () => {
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
      .post("/spot/", {
        name,
        description,
        personal_quota: personalQuota,
        type,
        value,
        street,
        zip_code: zipcode,
        number,
        complement,
        city,
        state,
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

  function signOutIfTokenIsExpired() {
    if (isTokenExpired()) {
      signOut();
      navigate("/signIn");
    }
  };

  function getTypes() {
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

  useEffect(() => {
    if (zipcode.length === 8) {
      autocomplete_address(zipcode)
    }
  }, [zipcode])

  return (
    <PageContainer>
      <ToastContainer />
      <Div>
        <TitleContainer>
          <CloseIcon onClick={goBack} size={30} color="black" />
          <Title>Cadastre um local</Title>
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
        <TitleContainer>
          <p>Localização</p>
        </TitleContainer>

        <MaskInput
          label="CEP"
          value={zipcode}
          mask="99999-999" 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            var cep = e.target.value
            cep = cep.replace(/\D/g, '');
            setZipcode(cep);
          }}
        />

        <SimpleInput
          label="Estado"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          disabled
        />
        <SimpleInput
          label="Cidade"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          disabled
        />
        <SimpleInput
          label="Bairro"
          value={neighborhood}
          onChange={(e) => {
            setNeighborhood(e.target.value);
          }}
          disabled
        />
        <SimpleInput
          label="Logradouro"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
          disabled
        />
        <SimpleInput
          label="Número do local"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <SimpleInput
          label="Complemento"
          value={complement}
          onChange={(e) => {
            setComplement(e.target.value);
          }}
        />
        <Button onClick={createSpot}>Cadastrar</Button>
      </Div>
    </PageContainer>
  );
}
