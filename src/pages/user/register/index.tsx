import { useState, FormEvent } from 'react';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
import api from '../../../services/api';

import {
    Container,
    Header,
    CentralDiv,
    Form,
    FormDiv,
    FieldSet,
    CheckboxInput,
} from "./styles"


export default function UserRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');
    const [cellphone, setCellphone] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        api.post('/', {
            name, 
            email, 
            gender, 
            birthdate: birthDate, 
            password, 
            document_id: cpf,
            cellphone, 
            bio: '',
            course,
            id_university: 0
        }).then(() => {
            alert('Cadastro realizado com sucesso')
        }).catch(() => {
            alert('erro no cadastro')
        })
        
    }
    return (
        <Container>
            <Header>
                <Logo></Logo>
            </Header>
            <CentralDiv>
                <h1>Cadastro</h1>
                <Form onSubmit={handleSubmit}>
                    <FormDiv>
                        <FieldSet>
                            <Input 
                                name="name" 
                                label="Nome" 
                                type="text" 
                                value={name} 
                                onChange={(e) => { setName(e.target.value)}}>    
                            </Input>
                            <Input 
                                name="email" 
                                label="Email" 
                                type="text" 
                                value={email} 
                                onChange={(e) => { setEmail(e.target.value)}}>
                            </Input>
                            <Input 
                                name="gender" 
                                label="Gênero" 
                                type="text" 
                                value={gender} 
                                onChange={(e) => { setGender(e.target.value)}}>
                            </Input>
                            <Input 
                                name="password" 
                                label="Senha" 
                                type={passwordVisible ? 'text' : 'password'} 
                                value={password} 
                                onChange={(e) => { setPassword(e.target.value)}}>
                            </Input>
                            <div>
                                <label>Mostrar senha</label>
                                <CheckboxInput 
                                    name="showPassword" 
                                    type="checkbox"
                                    onChange={togglePasswordVisibility} 
                                    checked={passwordVisible}>
                                </CheckboxInput>
                            </div>
                        </FieldSet>
                        <FieldSet>
                            <Input 
                                name="cpf" 
                                label="CPF" 
                                type="text"
                                value={cpf} 
                                onChange={(e) => { setCpf(e.target.value)}}>
                            </Input>
                            <Input 
                                name="birthDate" 
                                label="Data de Nascimento" 
                                type="date"
                                value={birthDate} 
                                onChange={(e) => { setBirthDate(e.target.value)}}>
                            </Input>
                            <Input 
                                name="college" 
                                label="Universidade" 
                                type="text"
                                value={college} 
                                onChange={(e) => { setCollege(e.target.value)}}>
                            </Input>
                            <Input 
                                name="course" 
                                label="Curso" 
                                type="text"
                                value={course} 
                                onChange={(e) => { setCourse(e.target.value)}}>
                            </Input>
                            <Input 
                                name="cellphone" 
                                label="Telefone Celular" 
                                type="text"
                                value={cellphone} 
                                onChange={(e) => { setCellphone(e.target.value)}}>
                            </Input>
                        </FieldSet>
                    </FormDiv>
                    <button type="submit">Cadastrar</button>
                </Form>
            </CentralDiv>
        </Container>
    )
}