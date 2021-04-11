import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as S from './styled';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors';
import CheckoutItem from '../../components/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button';

const CheckoutPage = ({ cartItems, total }) => (
	<S.CheckoutPage>
		<div className='header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Sub-Total</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<div className='info'>
			*Payment is setup for testing only.
			<br />
			Please use the below test card*
			<br />
			4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	</S.CheckoutPage>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
