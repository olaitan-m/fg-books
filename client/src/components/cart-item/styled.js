import styled from 'styled-components';

export const CartItem = styled.div`
	display: flex;
	align-items: center;
	.image {
		width: 8rem;
		height: 9rem;
		${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl})`};
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-right: 1rem;
	}
	.close {
		margin-left: auto;
		cursor: pointer;
	}
`;
