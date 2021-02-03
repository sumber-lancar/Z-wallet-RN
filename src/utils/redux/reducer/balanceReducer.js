import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  balance: null,
};

const balanceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_BALANCE:
      return {
        ...state,
        balance: action.payload.balance,
      };
    case actionTypes.ADJUST_BALANCE:
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };
    case actionTypes.ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };
    default:
      return state;
  }
};

export default balanceReducer;
