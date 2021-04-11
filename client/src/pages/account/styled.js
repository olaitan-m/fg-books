import styled from 'styled-components';

export const Account = styled.div`
	height: 100%;
	max-width: 120rem;
	width: 100%;
	margin: auto;
	background-image: url('https://i.ibb.co/WywLW3n/banner.jpg');
	background-position: center;
	background-size: cover;
	padding: 6rem 0;

	.form-container {
		width: 380px;
		height: 50rem;
		position: relative;
		margin: 5rem auto;
		background: #fff;
		padding: 5px;

		.button-container {
			width: 24rem;
			margin: 35px auto;
			position: relative;
			box-shadow: 0 0 1px 1px #000;
			border-radius: 10px;
		}

		.toggle-btn {
			padding: 10px 30px;
			cursor: pointer;
			background: transparent;
			border: 0;
			outline: none;
			position: relative;
		}

		#btn-acc {
			top: 0;
			position: absolute;
			width: 110px;
			height: 100%;
			background: #287afe93;
			border-radius: 10px;
			transition: 0.5s;
		}

		.input-group {
			top: 130px;
			position: absolute;
			width: 280px;
			transition: 0.5s;
		}
	}
`;
