import shopActionTypes from './types';

const INITIAL_STATE = {
	collections: null,
	errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopActionTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
			};
		case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				collections: action.payload,
			};
		case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
