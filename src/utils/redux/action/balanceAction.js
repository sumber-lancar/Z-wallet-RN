import * as actionTypes from '../actionTypes';

export const setBalance = (balance) => {
  return {
    type: actionTypes.GET_BALANCE,
    payload: {
      balance,
    },
  };
};

export const adjustBalance = (amount) => {
  return {
    type: actionTypes.ADJUST_BALANCE,
    payload: {
      amount,
    },
  };
};

export const addBalance = (amount) => {
  return {
    type: actionTypes.ADD_BALANCE,
    payload: {
      amount,
    },
  };
};
