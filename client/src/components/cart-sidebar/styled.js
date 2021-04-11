import styled from 'styled-components';

export const CartSidebar = styled.div`
	.cart-sidebar-overlay {
		position: fixed;
		left: 0;
		width: 100vw;
		top: -10vh;
		height: 120vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 2;
		transition: opacity 0.3s;
		opacity: ${({ cartHidden }) => (cartHidden ? 0 : 1)};
		visibility: ${({ cartHidden }) => (cartHidden ? 'hidden' : 'visible')};
	}

	.cart-sidebar-content {
		background-color: #fff;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding: 3.5rem 1.5rem;
		transition: transform 0.3s ease-in-out;
		z-index: 3;

		transform: ${({ cartHidden }) =>
			cartHidden ? 'translateX(100%)' : 'translateX(0)'};

		.cart-items {
			display: flex;
			flex-direction: column;
			padding-top: 3.5rem;

			.total {
				display: flex;
				justify-content: space-between;
				font-size: 1.4rem;
				margin: 2rem 0;
			}
		}
	}

	h4 {
		width: 100%;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 2;
		border-bottom: 1px solid #e1e1e1;
	}

	.cart-hamburger-icon {
		position: fixed;
		top: 20px;
		right: 20px;
		.line {
			background-color: #333;
		}
	}
`;
