import Spinner from '../spinner';

const WithSpinner = (WrappedComponent) => ({ isLoaded, ...otherProps }) => {
	return isLoaded ? <WrappedComponent {...otherProps} /> : <Spinner />;
};

export default WithSpinner;
