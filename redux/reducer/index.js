import { combineReducers } from 'redux';

import { reposReducer } from './repos/reducer';

export const rootReducer = combineReducers({
	repos: reposReducer,
});

export default rootReducer;