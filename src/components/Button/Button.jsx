import styled, { css, keyframes } from "styled-components";

const widthCss = {
	small: "width: 40px;min-width:40px;padding:5px;",
	large: "width: auto;min-width:100px;padding:5px;",
	default: "width: auto;padding:5px 10px;",
};

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Button = styled.button`
	display: inline-block;
	line-height: 50%;
	position: relative;
	text-decoration: none;
	margin: 5px;
	font-weight: 600;
	text-align: center;
	font-size: 14px;
	color: #fff;
	background-color: ${({ theme }) => theme.purple};
	${(props) => widthCss[props.small ?? "default"]};
	height: 40px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: all 200ms ease-in-out;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);

	:hover {
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
		background-color: ${({ theme }) => theme.darkPurple};
	}

	:disabled {
		background: #dddddd;
		cursor: not-allowed;
		pointer-events: none;
	}

	&.selected {
		background-color: #0075bf;
	}

	@media (min-width: 1024px) {
		max-width: 400px;
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		max-width: 300px;
	}

	@media (max-width: 767px) {
		max-width: 100%;
	}

	${(props) =>
		props.danger &&
		css`
			background: #dc3545;

			:hover {
				background: #a71d2a;
			}
		`}

	${(props) =>
		props.success &&
		css`
			background: ${({ theme }) => theme.success};

			:hover {
				background: #4a9665;
			}
		`}


	${(props) =>
		props.cancel &&
		css`
			color: #888888;
			background: #efefef;

			:hover {
				background: #c9c9c9;
			}
		`};

	${(props) =>
		props.secondary &&
		css`
			color: ${({ theme }) => theme.purple};
			background: ${({ theme }) => theme.white};

			:hover {
				background: ${({ theme }) => theme.lightGrey};
			}
		`};
`;

export const JumpButton = styled(Button)`
	animation-name: ${({ isVisible }) => (isVisible ? jumpAnimation : "none")};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
	transition: opacity 0.5s ease-in-out;
`;

export default Button;
