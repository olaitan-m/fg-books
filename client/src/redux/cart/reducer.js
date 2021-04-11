import cartActionTypes from './types';
import { addCartItem, removeItemFromCart } from './utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLECARTHIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case cartActionTypes.Add_ITEM:
			return {
				...state,
				cartItems: addCartItem(state.cartItems, action.payload),
			};
		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case cartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default CartReducer;
