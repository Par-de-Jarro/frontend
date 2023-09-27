import { useState } from "react";

import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/index";
import Text from "../../../components/Text/Text";
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

export default function UserLogin() {
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
				<h1>Login</h1>
				<FieldSet>
					<Input name="email" label="" type="text" placeholder="Email" />
					<Input name="password" label="" placeholder="Senha" type={passwordVisible ? 'text' : 'password'} />
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
				<Button>Entrar</Button>
			</CentralDiv>
		</Container >
	);
};