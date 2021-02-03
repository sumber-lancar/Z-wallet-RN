import {combineReducers} from 'redux';

import authReducer from './authReducer';
import balanceReducer from './balanceReducer';
import phoneReducer from "./phoneReducer";

const reducers = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
  phoneNumber: phoneReducer,
});

export default reducers;
