import styled from "styled-components";

const Title = styled.h2`
	font-size: ${(props) =>
		props.big ? "2em" : props.medium ? "1.5em" : "1em"};
	color: ${(props) => (props.textWhite ? "#fff" : "#1c1c1c")};
	margin: 10px 10px 10px 0px;
	font-weight: ${(props) => (props.bold ? "bold" : "normal")};
	border-bottom: ${(props) =>
		props.underline ? `1px solid ${props.theme.purple}` : "none"};

	@media (max-width: 1024px) {
		font-size: ${(props) =>
			props.big ? "2em" : props.medium ? "1em" : "0.8em"};
	}
`;

export default Title;
