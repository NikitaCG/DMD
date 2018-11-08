import * as airConstant from '../constants/airConstants';

export default function films(state = {}, action) {
	switch (action.type) {
	case airConstant.LOAD_AIR:
		return {
		    ...state,
			air: action.data,
		};


	default: return state;
	}
}
