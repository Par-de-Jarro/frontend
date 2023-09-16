import styled from "styled-components";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/index";
import Text from "../../components/Text/Text";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

interface UserLogin {
    handleLogin?: React.MouseEventHandler<HTMLButtonElement>
}

const Login : React.FC<UserLogin> = ({ handleLogin }) => {
	return (
		<Container>
			<Card
				style={{
					justifyContent: "space-evenly",
					maxWidth: 400,
					height: 300,
				}}
			>
				{/* <img src="/logo-ailabs.png" width={68} /> */}
				<Title>Login to Par de Jarro</Title>
				<Text>
					Authenticate your account by logging into Par de Jarro.
				</Text>
				<Button onClick={handleLogin}>Continue</Button>
			</Card>
		</Container>
	);
};

export default Login;
