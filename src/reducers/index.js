import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import airReducer from './air';

const AppReducers = combineReducers({
	routerReducer,
    airReducer,
});

export default AppReducers;
