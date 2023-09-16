import styled, { css } from "styled-components";

const Text = styled.span`
	font-size: 1em;
	text-align: center;
	color: #808080;
	${(props) =>
		props.danger &&
		css`
			color: ${({ theme }) => theme.red};
		`}
`;

export default Text;
