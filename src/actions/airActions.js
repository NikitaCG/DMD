import * as airConstant from '../constants/airConstants';
import * as airBase from '../airHardcodeBase';


export function loadAir(dispatch) {
	return dispatch(
		{
			type: airConstant.LOAD_AIR,
			data: airBase.base,
		},
	);
}
