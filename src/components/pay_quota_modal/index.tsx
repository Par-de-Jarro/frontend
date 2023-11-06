import React, { useState } from 'react'
import Modal from '../modal'
import { Quota } from '../../types/quota'
import styled, { css } from 'styled-components'
import cameraIcon from '../../styles/assets/cameraIcon.png'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

export const ImageInputWrapper = styled.div`
  height: 105px;
  width: 105px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  background-image: url(${cameraIcon}); 
  background-size: 62%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ECECEC;
`

export const ImageInput = styled.input`
  cursor: pointer;
  height: 100px;
  width: 100px;
  position:absolute;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0;
  -moz-opacity: 0;
  border-radius: 16px;
`


export const Button = styled.button`
    border: 0;
    height: 50px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items:  center;

    text-decoration: none;
    font-size: 16px;

    background-color: #f8f4e8;
    color: #513422;
    border-radius: 12px;

    margin-top: 20px;


    &:hover {
        background-color: #513422;
        color: #f8f4e8;
    }
    
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

    ${(props) => props.disabled && css`
      color: #513422;
      border-color: #ececec;

      &:hover {
        color: #ececec;
        border-color: #ececec;
      }
  `}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const ImagesDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px; 
  justify-items: center; 
  align-items: center; 
  margin-bottom: 20px;
`

export const QuotaImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 16px;
    padding: 5px;
    border: 2px solid #ccc;
`

interface PayQuotaModal {
    onClose: () => void
    quota: Quota
  }
  
const PayQuotaModal: React.FC<PayQuotaModal> = ({ onClose, quota }) => {
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const navigate = useNavigate()

    const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
      
        if (selectedFiles.length > 0) {
          const newFiles = [...imageFiles, ...Array.from(selectedFiles)];
          const newPreviews = Array.from(selectedFiles).map((file) => URL.createObjectURL(file));
      
          setImageFiles(newFiles);
          setImagePreviews([...imagePreviews, ...newPreviews]);
        }
    };


    const uploadImage = () => {
        let formData = new FormData();
  
        imageFiles.forEach((file) => {
            formData.append("files", file);
        });
  
        api.post(`/personal_quota_payment/${quota.id_personal_quota_payment}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data; boundary=XXXX; charset=utf-8'
          },
        })
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          navigate('/');
          onClose()

        })
        .catch((error) => {
          console.error('Image upload failed:', error);
        });
       
      }

    const payQuota = async () => {
        await api.post(`/personal_quota_payment/${quota.id_personal_quota_payment}/pay`).then((response) => {
            if (response.status === 200) {
                if (imageFiles.length > 0) {
                    uploadImage();
                }
            }
        }).catch((error) => {
            console.error('Pay personal quota payment failed: ', error);
        })
            
    }

    return (
        <Modal onClose={onClose} title='Pagar Cota'>
            <Container>
                <ImagesDiv>
                    {
                        imagePreviews.map((imageUrl: string) => (
                            <QuotaImage src={imageUrl}/>
                        ))
                    }
                    <ImageInputWrapper>
                        <ImageInput type="file" accept="image/*" onChange={selectImage}></ImageInput>
                    </ImageInputWrapper>
                </ImagesDiv>
                <Button disabled={quota.status === 'PAYED'} onClick={payQuota}>{quota.status === 'PAYED' ? 'Cota Paga' : 'Pagar Cota'}</Button>
            </Container>
        </Modal>
    )
}

export default PayQuotaModal