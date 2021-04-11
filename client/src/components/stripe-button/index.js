import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_6PeCkyJgqIjhhaE7ENE7CTVs00ljpRYrPj';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use to test credit card'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='fgBooks Ltd'
			billingAddress
			shippingAddress
			image='/icons/fgb-192x192.png'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
