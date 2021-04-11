import miscActionTypes from './types';

const INITIAL_STATE = {
	menuHidden: true,
};

const miscReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case miscActionTypes.TOGGLEMENUHIDDEN:
			return {
				...state,
				menuHidden: !state.menuHidden,
			};
		case miscActionTypes.HIDEMENU:
			return {
				...state,
				menuHidden: true,
			};
		default:
			return state;
	}
};

export default miscReducer;
