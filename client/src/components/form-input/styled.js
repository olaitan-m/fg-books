import styled from 'styled-components';

export const FormInput = styled.div`
	position: relative;
	width: 100%;
	height: 40px;
	color: rgb(99, 99, 99);
	padding: 0 10px;
	margin: 30px 0 10px;
	transition: 0.5s;

	input {
		position: absolute;
		width: 100%;
		height: 100%;
		background: transparent;
		box-shadow: none;
		border: none;
		outline: none;
		font-size: 18px;
		padding: 0 10px;
		z-index: 1;
		color: #fff;
	}
	.text {
		position: absolute;
		top: 0;
		left: 0;
		line-height: 40px;
		font-size: 18px;
		padding: 0 10px;
		display: block;
		transition: 0.5s;
		pointer-events: none;
	}

	input:valid + .text,
	input:focus + .text {
		top: -35px;
		left: -10px;
	}

	.line {
		position: absolute;
		bottom: 0;
		display: block;
		width: 100%;
		height: 2px;
		background: #2879fe;
		transition: 0.5s;
		border-radius: 2px;
		pointer-events: none;
	}
	input:valid ~ .line,
	input:focus ~ .line {
		height: 100%;
	}
`;
