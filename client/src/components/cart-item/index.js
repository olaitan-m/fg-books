import { connect } from 'react-redux';
import * as S from './styled';
import { clearItemFromCart } from '../../redux/cart/actions';

const CartItem = ({ item, clearItem }) => {
	const { name, imageUrl, price, quantity } = item;
	return (
		<S.CartItem imageUrl={imageUrl}>
			<div className='image' />
			<div className='text'>
				<p className='name'>{name}</p>
				<p className='price'>
					{quantity} x {price}
				</p>
			</div>
			<div className='close' onClick={() => clearItem(item)}>
				&#10005;
			</div>
		</S.CartItem>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
