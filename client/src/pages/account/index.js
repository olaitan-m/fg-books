import { useState } from 'react';
import * as S from './styled';
import Login from '../../components/login/login';
import Register from '../../components/register/register';

const Account = () => {
	const [formPos, setFormPos] = useState({
		login: '50px',
		register: '450px',
		btn: '0',
		opacity: { login: 1, register: 0 },
	});

	const btnToggle = (e) => {
		if (e.target.id === 'btn-login') {
			setFormPos({
				login: '50px',
				register: '450px',
				btn: '0',
				opacity: { login: 1, register: 0 },
			});
		} else {
			setFormPos({
				login: '-400px',
				register: '50px',
				btn: '130px',
				opacity: { login: 0, register: 1 },
			});
		}
	};
	return (
		<S.Account>
			<div className='form-container'>
				<div className='button-container'>
					<div id='btn-acc' style={{ left: formPos.btn }}></div>
					<button
						id='btn-login'
						type='button'
						className='toggle-btn'
						onClick={btnToggle}
					>
						Log In
					</button>
					<button
						id='btn-register'
						type='button'
						className='toggle-btn'
						onClick={btnToggle}
					>
						Register
					</button>
				</div>
				<Login formPos={formPos} />
				<Register formPos={formPos} />
			</div>
		</S.Account>
	);
};

export default Account;
