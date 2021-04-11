import { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/actions';

const Login = ({ googleSignInStart, emailSignInStart, formPos }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<form
			className='input-group'
			style={{
				left: formPos.login,
				opacity: formPos.opacity.login,
			}}
			onSubmit={handleSubmit}
		>
			<FormInput
				type='email'
				name='email'
				label='Email'
				value={email}
				handleChange={handleChange}
				required
			/>

			<FormInput
				type='password'
				name='password'
				label='Password'
				value={password}
				handleChange={handleChange}
				required
			/>
			<CustomButton type='submit'>Login</CustomButton>
			<CustomButton type='button' onClick={googleSignInStart} isGoogleLogin>
				Login With Google
			</CustomButton>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
