import * as S from './styled';

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<S.FormInput>
			<input onChange={handleChange} {...otherProps} />
			<span className='text'>{label}</span>
			<span className='line'></span>
		</S.FormInput>
	);
};

export default FormInput;
