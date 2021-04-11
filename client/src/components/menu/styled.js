import styled from 'styled-components';

export const Menu = styled.div`
	.menu-overlay {
		position: fixed;
		left: 0;
		width: 100vw;
		top: -10vh;
		height: 120vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2;
		transition: opacity 0.3s;
		opacity: ${({ menuHidden }) => (menuHidden ? 0 : 1)};
		visibility: ${({ menuHidden }) => (menuHidden ? 'hidden' : 'visible')};
	}
	.menu-content {
		display: flex;
		flex-flow: column nowrap;
		list-style: none;
		background-color: #222529;
		position: fixed;
		top: 0;
		left: -300px;
		height: 100vh;
		width: 300px;
		z-index: 3;
		padding-top: 5.5rem;
		transition: transform 0.3s ease-in-out;
		transform: ${({ menuHidden }) =>
			menuHidden ? 'translateX(0)' : 'translateX(100%)'};

		@media (min-width: 600px) {
			flex-flow: row nowrap;
			padding-top: unset;
			background-color: unset;
			position: unset;
			top: unset;
			left: unset;
			height: unset;
			width: unset;
			padding-top: unset;
			transform: unset;
		}
	}
`;
