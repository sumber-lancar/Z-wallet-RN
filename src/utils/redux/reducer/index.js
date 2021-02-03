import {combineReducers} from 'redux';

import authReducer from './authReducer';
import balanceReducer from './balanceReducer';
import receiverReducer from './receiverReducer';

const reducers = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
  receiver: receiverReducer,
});

export default reducers;
