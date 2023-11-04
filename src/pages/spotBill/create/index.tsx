import PageContainer from '../../../components/page-container'
import Input from '../../../components/dropdown-input'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api'
import { Button, CloseIcon, Div, Title, TitleContainer, LocationIcon, ImageInputWrapper, CheckBoxDiv, ImageInput, SpotImage, ImagesDiv } from './styles'
import { DropdownItem } from '../../../types/input';
import SimpleInput from '../../../components/simple-input'
import CheckBox from '../../../components/checkbox';
import { useAuth } from '../../../hooks/auth'

const CreateSpotBill: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    
    const { isTokenExpired, signOut } = useAuth()

    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1);
    }

    const uploadImage = (files: File[], spotId: string) => {
        let formData = new FormData();
  
        imageFiles.forEach((file) => {
            formData.append("files", file);
        });
  
        api.post(`/spot/${spotId}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data; boundary=XXXX; charset=utf-8'
          },
        })
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          navigate('/mySpots');

        })
        .catch((error) => {
          console.error('Image upload failed:', error);
        });
       
      }

    const createSpot = async () => {
        await api.post('/spot/', {
            name,
            description,
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data
                if (imageFiles.length > 0) {
                    uploadImage(imageFiles, data.id_spot);
                }
            }
        }).catch((error) => {
            console.error('Create spot failed: ', error);
        })
            
    }

    const signOutIfTokenIsExpired = () => {
        if(isTokenExpired()) {
          signOut()
          navigate('/signIn')
        }
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
        signOutIfTokenIsExpired()
    }, [imageFiles])

    return (
        <PageContainer>
            <Div>
                <TitleContainer>
                    <CloseIcon onClick={goBack} size={30} color='black' />
                    <Title>Cadastre uma nova conta</Title>
                </TitleContainer>
                <TitleContainer>
                    <p>Imagens</p>
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
                <TitleContainer>
                    <p>Detalhes</p>
                </TitleContainer>
                <SimpleInput
                    label='Nome'
                    value={name}
                    onChange={(e) => { setName(e.target.value) } }
                />
                <SimpleInput
                    label='Descrição'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) } }
                />
                <SimpleInput
                    label='Valor'
                    value={value.toString()}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    type='number'
                    prefix='R$'
                />
                <Button onClick={createSpot}>Cadastrar</Button>
            </Div>

        </PageContainer>
      )
  }
  
  export default CreateSpotBill