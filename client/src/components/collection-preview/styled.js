import styled from 'styled-components';

export const CollectionPreview = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;

	.title {
		cursor: pointer;
		font-size: 3rem;
		margin-bottom: 35px;
		text-align: center;
		text-decoration: underline;
		text-transform: uppercase;
	}

	.preview {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
