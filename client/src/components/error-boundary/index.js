import React from 'react';
import * as S from './styled';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<S.ErrorBoundary imageUrl='https://i.ibb.co/RC7Bsv6/qIufhof.png'>
					<div className='image' />
					<h2 className='text'>Sorry this page is broken</h2>
				</S.ErrorBoundary>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
