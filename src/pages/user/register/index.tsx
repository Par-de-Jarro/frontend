import { useState, FormEvent, useEffect } from 'react';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
import api from '../../../services/api';
import Select from '../../../components/select';

import {
    Container,
    Header,
    CentralDiv,
    Form,
    FormDiv,
    FieldSet,
    CheckboxInput,
    Title,
    Button
} from "./styles"

export interface University {
    id_university: string,
    lat: number,
    long: number,
    name: string,
    slug: string
}

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
    const [colleges, setColleges] = useState([]);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const getColleges = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const config = {
            headers:{
                'Api-Key': apiKey
            }
        };
        
        const response = await api.get('university', config);

        setColleges(response.data);
    }

    useEffect(() => {
        getColleges();
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const apiKey = process.env.REACT_APP_API_KEY;
        const config = {
            headers:{
                'Api-Key': apiKey
            }
        };

        await api.post('user', {
            name, 
            email, 
            birthdate: birthDate, 
            password, 
            document_id: cpf,
            cellphone, 
            bio: '',
            course,
            id_university: college
        }, config).then(() => {
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
                <Title>Cadastro</Title>
                <Form>
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
                            <Select 
                                value={gender}
                                onChange={(e) => {setGender(e.target.value)}}
                                name="gender" 
                                label="Gênero"
                                options= {[
                                    {value: 'FEMININE', label: 'Feminino'},
                                    {value: 'MASCULINE', label: 'Masculino'},
                                    {value: 'UNINFORMED', label: 'Não informado'}
                                ]}
                            />
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
                            <Select 
                                value={college}
                                onChange={(e) => {setCollege(e.target.value)}}
                                name="college" 
                                label="Universidade"
                                options= {colleges.map((university: University) => {
                                    return {value: university.id_university, label: university.slug};
                                })}
                            />
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
                    <Button onClick={handleSubmit}>Cadastrar</Button>
                </Form>
            </CentralDiv>
        </Container>
    )
}