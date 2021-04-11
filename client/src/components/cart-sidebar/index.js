import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import HamburgerIcon from '../hamburger-icon';
import CartItem from '../cart-item';
import CustomButton from '../custom-button';
import { toggleCartHidden } from '../../redux/cart/actions';
import {
	selectCartHidden,
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/selectors';

const CartSidebar = ({
	cartHidden,
	cartItems,
	cartTotal,
	toggleCartHidden,
	history,
	dispatch,
	...restProps
}) => {
	let cartRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!cartHidden && !cartRef.current.contains(e.target)) {
				toggleCartHidden();
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [cartHidden, toggleCartHidden]);
	return (
		<S.CartSidebar cartHidden={cartHidden} {...restProps}>
			<div className='cart-sidebar-overlay' />
			<div ref={cartRef} className='cart-sidebar-content'>
				<HamburgerIcon
					className='cart-hamburger-icon'
					open={cartHidden}
					setOpen={toggleCartHidden}
				/>
				<h4>Shopping Cart</h4>
				<div className='cart-items'>
					{cartItems.length ? (
						<>
							{cartItems.map((cartItem) => (
								<CartItem key={cartItem.id} item={cartItem} />
							))}
							<div className='total'>
								TOTAL: <span>${cartTotal}</span>
							</div>
							<CustomButton
								onClick={() => {
									history.push('/checkout');
									toggleCartHidden();
								}}
							>
								Go to Checkout
							</CustomButton>
						</>
					) : (
						<span className='empty-msg'>Your cart is empty</span>
					)}
				</div>
			</div>
		</S.CartSidebar>
	);
};

const mapStateToProps = createStructuredSelector({
	cartHidden: selectCartHidden,
	cartItems: selectCartItems,
	cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartSidebar)
);
