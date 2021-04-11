import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
	position: relative;
	background-color: #fff;
	max-width: 120rem;
	margin: auto;
`;

export const Top = styled.div`
	color: #666;
	font-size: 1.2rem;
	border-bottom: 1px solid #e1e1e1;
	transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
	padding: 0.8rem 1rem;
	display: flex;
	justify-content: center;

	@media (min-width: 600px) {
		padding: 0.8rem 2.6rem;
	}

	.left {
		flex: 1;
	}

	.right {
		display: flex;

		> *:first-child {
			margin-right: 2rem;
		}
	}
`;

export const Main = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	transition: opacity 0.5s ease 0.4s;
	top: 0;
	padding: 0.7rem 1rem;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
	${({ sticky }) =>
		sticky &&
		`position: fixed; top:0; left: 0; z-index:100; padding-left: 5vw; padding-right: 5vw;`}
	.left {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		@media (min-width: 600px) {
			flex-flow: row nowrap;
		}

		.menu-hamburger-icon {
			${({ menuHidden }) =>
				!menuHidden && `position: fixed; top: 25px; left: 250px; `}

			.line {
				background-color: ${({ menuHidden }) => (menuHidden ? '#333' : '#ccc')};
			}
		}
	}

	.right {
		display: flex;
	}
`;

export const Logo = styled(Link)`
	img {
		height: 40px;
		padding-left: 1rem;
		@media (min-width: 600px) {
			height: 50px;
		}
	}
`;

export const ReactRouterLink = styled(Link)`
	color: #fff;
	line-height: 4rem;
	border-bottom: 0.01px solid #535558;
	padding-left: 2.5rem;
	font-weight: 700;
	display: block;
	weight: 100%;
	border-left: 3px solid transparent;
	cursor: pointer;

	&:hover {
		color: #26c;
		border-left-color: #26c;
	}

	@media (min-width: 600px) {
		color: unset;
		border: unset;
		padding: 0 0.6rem;
		margin: 0 0.6rem;
		line-height: 1rem;

		&:first-child {
			margin-left: 3rem;
		}
	}
`;

export const IconLink = styled.div`
	*:first-child {
		margin-right: 1rem;
	}

	&:hover {
		color: #26c;
		cursor: pointer;
	}

	@media (min-width: 600px) {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;

		* {
			margin-right: 1rem;
		}
	}

	img {
		width: 30px;
	}

	.cart {
		position: relative;
		.cart-count {
			left: 28px;
			top: 9px;
			position: absolute;
			width: 1.4rem;
			height: 1.4rem;
			line-height: 1.4rem;
			font-size: 1.2rem;
			border-radius: 50%;
			background-color: #26c;
			color: #fff;
			transform: translate(-50%, -50%);
			z-index: 1;
			text-align: center;
			white-space: nowrap;
		}
	}

	p {
		display: none;
		font-weight: 400;

		@media (min-width: 600px) {
			display: flex;
			flex-flow: column nowrap;
			font-size: 1.4rem;

			&:nth-child(2) {
				border-right: 1px solid #e1e1e1;
			}
		}
		span {
			font-weight: 700;

			@media (min-width: 600px) {
				font-size: 1.6rem;
			}
		}
	}
`;
