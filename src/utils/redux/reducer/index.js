import {combineReducers} from 'redux';

import authReducer from './authReducer';
import balanceReducer from './balanceReducer';

const reducers = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
});

export default reducers;
