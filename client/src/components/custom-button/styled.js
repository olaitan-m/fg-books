import styled, { css } from 'styled-components';

const googleButtonStyles = css`
	background-color: #4285f4;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleLogin) {
		return googleButtonStyles;
	}
};

export const CustomButton = styled.button`
	width: 90%;
	padding: 1.2rem;
	cursor: pointer;
	display: block;
	margin: 1.5rem auto;
	background-color: #26c;
	border: 0;
	outline: none;
	color: white;

	&:hover {
		background-color: #246ddb;
	}

	${getButtonStyles}
`;
