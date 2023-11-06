import PageContainer from '../../../components/page-container'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../services/api'
import { Button, CloseIcon, Div, Title, TitleContainer, ImageInputWrapper, ImageInput, SpotImage, ImagesDiv } from './styles'
import SimpleInput from '../../../components/simple-input'
import { useAuth } from '../../../hooks/auth'

const CreateSpotBill: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [referenceDate, setReferenceDate] = useState('')
    
    const { isTokenExpired, signOut } = useAuth()
    const { id } = useParams();

    const navigate = useNavigate()
    
    const goBack = () => {
        navigate(-1);
    }

    const uploadImage = (files: File[], spotBillId: string) => {
        let formData = new FormData();
  
        imageFiles.forEach((file) => {
            formData.append("files", file);
        });
  
        api.post(`/spot_bill/${spotBillId}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data; boundary=XXXX; charset=utf-8'
          },
        })
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          navigate('/spotBill/list');

        })
        .catch((error) => {
          console.error('Image upload failed:', error);
        });
       
      }

    const createSpotBill = async () => {
        await api.post('/spot_bill', {
            id_spot: id,
            name,
            description,
            reference_date: referenceDate,
            value
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data
                if (imageFiles.length > 0) {
                    uploadImage(imageFiles, data.id_spot_bill);
                }
            }
        }).catch((error) => {
            console.error('Create spot bill failed: ', error);
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
                    label='Data de vencimento' 
                    value={referenceDate}
                    onChange={(e) => {
                      setReferenceDate(e.target.value)
                    }}
                    type='date'
                />
                <SimpleInput
                    label='Valor'
                    value={value.toString()}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    type='number'
                    prefix='R$'
                />
                <Button onClick={createSpotBill}>Cadastrar</Button>
            </Div>

        </PageContainer>
      )
  }
  
  export default CreateSpotBill