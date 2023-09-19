import { useState } from 'react';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
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
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <Container>
            <Header>
                <Logo></Logo>
            </Header>
            <CentralDiv>
                <h1>Cadastro</h1>
                <Form>
                    <FormDiv>
                        <FieldSet>
                            <Input name="name" label="Nome" type="text"></Input>
                            <Input name="email" label="Email" type="text"></Input>
                            <Input name="gender" label="Gênero" type="text"></Input>
                            <Input name="password" label="Senha" type={passwordVisible ? 'text' : 'password'} ></Input>
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
                            <Input name="cpf" label="CPF" type="text"></Input>
                            <Input name="birthDate" label="Data de Nascimento" type="date"></Input>
                            <Input name="college" label="Universidade" type="text"></Input>
                            <Input name="course" label="Curso" type="text"></Input>
                            <Input name="cellphone" label="Telefone Celular" type="text"></Input>
                        </FieldSet>
                    </FormDiv>
                </Form>
            </CentralDiv>
        </Container>
    )
}