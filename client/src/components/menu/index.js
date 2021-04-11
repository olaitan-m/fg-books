import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import { toggleMenuHidden } from '../../redux/misc/actions';
import { selectMenuHidden } from '../../redux/misc/selectors';

const Menu = ({ children, menuHidden, toggleMenuHidden }) => {
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!menuHidden && !menuRef.current.contains(e.target)) {
				toggleMenuHidden();
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [menuHidden, toggleMenuHidden]);
	return (
		<S.Menu menuHidden={menuHidden}>
			<div className='menu-overlay' />
			<div ref={menuRef} className='menu-content'>
				{children}
			</div>
		</S.Menu>
	);
};

const mapStateToProps = createStructuredSelector({
	menuHidden: selectMenuHidden,
});

const mapDispatchToProps = (dispatch) => ({
	toggleMenuHidden: () => dispatch(toggleMenuHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
