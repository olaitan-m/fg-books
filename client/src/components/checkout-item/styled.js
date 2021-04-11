import styled from 'styled-components';

export const CheckoutItem = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;

	@media screen and (max-width: 800px) {
		font-size: 18px;
	}

	.image {
		position: relative;
		width: 25%;
		padding-right: 15px;
		.item-image {
			width: 100%;
		}
		.close-image {
			cursor: pointer;
			position: absolute;
			top: -4px;
			left: -4px;
			width: 20px;
		}
	}

	.text {
		width: 15%;

		&.name {
			width: 40%;
		}

		&.quantity {
			display: flex;
			flex-direction: column;
			align-items: center;
			span {
				margin: 0 10px;
			}
			div {
				cursor: pointer;
			}
		}
	}
`;
