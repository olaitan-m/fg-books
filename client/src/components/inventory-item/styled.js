import styled from 'styled-components';

export const InventoryItem = styled.div`
	position: relative;
	overflow: hidden;
	cursor: pointer;
	grid-row: unset;
	grid-column: unset;

	@media (min-width: 600px) {
		${({ orientation }) =>
			orientation === 'vertical'
				? `grid-row: span 2;`
				: orientation === 'horizontal'
				? `grid-column: span 2;`
				: null}
	}

	.background {
		${({ img }) => img && `background-image: url(${img})`};
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: transform 1s;
	}
	.description {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #000;
		font-weight: 500;
		padding: 13px 39px 11px;
		max-width: 409px;
		background: rgba(255, 255, 255, 0.9);
		border: 2px solid rgba(255, 255, 255, 0);
		border-radius: 6px;
	}

	&:hover .background {
		transform: scale3d(1.1, 1.1, 1);
	}

	&:hover .description {
		background: rgba(40, 121, 254, 0.9);
		color: #fff;
	}
`;
