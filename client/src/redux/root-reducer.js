import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/reducer';
import CartReducer from './cart/reducer';
import shopReducer from './shop/reducer';
import inventoryReducer from './inventory/reducer';
import miscReducer from './misc/reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: CartReducer,
	inventory: inventoryReducer,
	shop: shopReducer,
	misc: miscReducer,
});

export default persistReducer(persistConfig, rootReducer);
