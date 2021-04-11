import styled from 'styled-components';

export const CollectionItem = styled.div`
	width: 270px;
	margin: 1.5rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	&:hover {
		.wrapper {
			transform: translateY(-30px);

			.button-container {
				opacity: 1;
			}
		}
	}

	.background {
		height: 315px;
		${({ imageUrl }) => imageUrl && `background-image: url(${imageUrl})`};
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-bottom: 1.5rem;
	}

	.wrapper {
		transition: transform 0.3s ease-out;
		background-color: #fff;

		.description {
			padding: 0 2rem;
			display: flex;
			justify-content: space-between;
		}
		.button-container {
			opacity: 0;

			@media (max-width: 1024px) {
				opacity: 1;
			}
		}
	}
`;
