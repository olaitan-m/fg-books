import styled from 'styled-components';

export const Inventory = styled.div`
	width: 96%;
	max-width: 120rem;
	background-color: #fff;
	margin: auto;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-auto-rows: 30rem;
	grid-auto-flow: dense;

	@media (min-width: 600px) {
	}
`;
