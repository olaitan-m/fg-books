import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import HamburgerIcon from '../hamburger-icon';
import CartSidebar from '../cart-sidebar';
import Menu from '../menu';
import { signOutStart } from '../../redux/user/actions';
import { toggleCartHidden } from '../../redux/cart/actions';
import { toggleMenuHidden, hideMenu } from '../../redux/misc/actions';
import { selectCurrentUser } from '../../redux/user/selectors';
import {
	selectCartItemsCount,
	selectCartHidden,
} from '../../redux/cart/selectors';
import { selectMenuHidden } from '../../redux/misc/selectors';

const Header = ({
	currentUser,
	toggleCartHidden,
	cartHidden,
	itemCount,
	menuHidden,
	toggleMenuHidden,
	hideMenu,
	signOutStart,
}) => {
	const [sticky, setSticky] = useState(false);
	useEffect(() => {
		let handler = (e) => {
			if (window.scrollY > 200) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};
		document.addEventListener('scroll', handler);
		return () => {
			document.removeEventListener('scroll', handler);
		};
	}, [sticky, setSticky]);

	return (
		<S.Header>
			<S.Top>
				<div className='left'>
					<p>Hello, Welcome to the store</p>
				</div>
				<div className='right'>
					<p>ENG</p>
					<p>USD</p>
				</div>
			</S.Top>
			<S.Main menuHidden={menuHidden} sticky={sticky}>
				<div className='left'>
					<HamburgerIcon
						className='menu-hamburger-icon'
						open={menuHidden}
						setOpen={toggleMenuHidden}
						dontShowOnLargeViewPort
					/>
					<S.Logo to='/'>
						<img alt='logo' src='/icons/logo.svg' />
					</S.Logo>
					<Menu menuHidden={menuHidden} setMenuHidden={toggleMenuHidden}>
						<S.ReactRouterLink to='/shop' onClick={hideMenu}>
							Shop
						</S.ReactRouterLink>
						<S.ReactRouterLink to='/contact' onClick={hideMenu}>
							Contact
						</S.ReactRouterLink>
						{currentUser ? (
							<S.ReactRouterLink
								as='div'
								onClick={() => {
									signOutStart();
									hideMenu();
								}}
							>
								Logout
							</S.ReactRouterLink>
						) : (
							<S.ReactRouterLink to='/account' onClick={hideMenu}>
								Login
							</S.ReactRouterLink>
						)}
					</Menu>
				</div>
				<div className='right'>
					<S.IconLink>
						<img alt='phone' src='/icons/phone.svg' />
						<p>
							Call Us Now:<span>0(800)123-456</span>
						</p>
					</S.IconLink>
					<S.IconLink cartHidden={cartHidden} onClick={toggleCartHidden}>
						<p>
							Shopping Cart:<span>$0.00</span>
						</p>
						<div className='cart'>
							<img alt='shopping-bag' src='/icons/shopping-bag.svg' />

							{itemCount > 0 ? (
								<span className='cart-count'>{itemCount}</span>
							) : null}
						</div>
					</S.IconLink>
					<CartSidebar className='cart-sidebar' />
				</div>
			</S.Main>
		</S.Header>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartHidden: selectCartHidden,
	itemCount: selectCartItemsCount,
	menuHidden: selectMenuHidden,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
	toggleMenuHidden: () => dispatch(toggleMenuHidden()),
	hideMenu: () => dispatch(hideMenu()),
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
