import styled from 'styled-components';

export const HamburgerIcon = styled.div`
	width: 1.7rem;
	height: 1.7rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	z-index: 4;
	cursor: pointer;

	@media (min-width: 600px) {
		${({ dontShowOnLargeViewPort }) =>
			dontShowOnLargeViewPort && `display: none;`}
	}

	.line {
		 {
			width: 1.6rem;
			height: 0.25rem;
			border-radius: 10px;
			transform-origin: 1px;
			transition: all 0.3s linear;

			&:nth-child(1) {
				transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(48deg)')};
			}
			&:nth-child(2) {
				transform: ${({ open }) =>
					open ? 'translateX(0)' : 'translateX(100%)'};
				opacity: ${({ open }) => (open ? 1 : 0)};
			}
			&:nth-child(3) {
				transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(-48deg)')};
			}
		}
	}
`;
