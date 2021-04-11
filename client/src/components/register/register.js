import { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';
import { signUpStart } from '../../redux/user/actions';

const Register = ({ signUpStart, formPos }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Password don't match, please fix");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<form
			className='input-group'
			style={{
				left: formPos.register,
				opacity: formPos.opacity.register,
			}}
			onSubmit={handleSubmit}
		>
			<FormInput
				type='text'
				name='displayName'
				label='Name'
				value={displayName}
				handleChange={handleChange}
				required
			/>
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
			<FormInput
				type='password'
				name='confirmPassword'
				label='Confirm Password'
				value={confirmPassword}
				handleChange={handleChange}
				required
			/>
			<CustomButton type='submit'>Register</CustomButton>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Register);
