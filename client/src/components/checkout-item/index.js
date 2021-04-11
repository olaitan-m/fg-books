import { connect } from 'react-redux';
import * as S from './styled';
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<S.CheckoutItem>
			<div className='image'>
				<img className='item-image' src={imageUrl} alt='item' />
				<img
					className='close-image'
					src='/icons/close.svg'
					alt='close'
					onClick={() => clearItem(cartItem)}
				/>
			</div>
			<span className='text name'>
				{name}
				<br />${price}
			</span>
			<span className='text quantity'>
				<div onClick={() => addItem(cartItem)}>&and;</div>
				<span>{quantity}</span>
				<div onClick={() => removeItem(cartItem)}>&or;</div>
			</span>
			<span className='text'>${Math.round(price * quantity)}</span>
		</S.CheckoutItem>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
