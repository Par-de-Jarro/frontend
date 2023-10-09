import Input from "../../../components/input";
import PageContainer from "../../../components/page-container";
import { Title } from "../../user/styles";
import { Button, TitleContainer } from "../styles";


import api from '../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from "react";
import { Form } from "./styles";


export default function AddSpotImage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const uploadImageSpot = async (formData: FormData) => {
        await api.post(`/spot/${id}/upload`, formData,{
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
        uploadImageSpot(formData);
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
                />
                <Button>Enviar local</Button>
            </Form>
        </PageContainer>
    )
}
