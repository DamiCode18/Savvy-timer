import isEmpty from '../validation/is-empty';
import {SET_CURRENT_USER} from '../actions/types';

const initailState = {
	isAuthenticated : false,
	user            : null
};

export default function(state = initailState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated : !isEmpty(action.payload),
				user            : action.payload
			};
		default:
			return state;
	}
}
