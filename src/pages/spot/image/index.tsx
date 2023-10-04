import Input from "../../../components/input";
import PageContainer from "../../../components/page-container";
import { Title } from "../../user/styles";
import { Button, Form, TitleContainer } from "../styles";

import api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";


export default function AddSpotImage() {
    const navigate = useNavigate();

    const uploadImageSpot = async (id_spot: number, formData: FormData) => {
        await api.post(`/spot/${id_spot}/upload`, formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            }}
        )
        navigate('/')
    }
    const formRef = useRef<HTMLFormElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(formRef.current ?? undefined);
        uploadImageSpot(12, formData);
    }

    return (
        <PageContainer>
            <Form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                <TitleContainer>
                    <Title>Adicione as imagens do local</Title>
                </TitleContainer>
                <Input
                    type="file"
                    inputValue="spot-image"
                    multiple={true}
     //               ref={inputRef}
                />
                <Button>Enviar local</Button>
            </Form>
        </PageContainer>
    )
}
