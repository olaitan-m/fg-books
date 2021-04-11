import styled from 'styled-components';

export const CheckoutPage = styled.div`
	width: 55%;
	max-width: 120rem;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5rem auto 0;
	padding-bottom: 5rem;

	@media screen and (max-width: 800px) {
		width: 90%;
	}

	.header {
		width: 100%;
		height: 4rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid darkgrey;
	}

	.total {
		margin-top: 3rem;
		margin-left: auto;
		font-size: 3rem;
	}
	button {
		margin-left: auto;
		margin-top: 5rem;
	}

	.info {
		line-height: 1.5;
		text-align: center;
		margin-top: 4rem;
		font-size: 2rem;
		color: #ea3c53;
	}
`;
