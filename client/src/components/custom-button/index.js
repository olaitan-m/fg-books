import * as S from './styled';

const CustomButton = ({ children, ...props }) => (
	<S.CustomButton {...props}>{children}</S.CustomButton>
);

export default CustomButton;
