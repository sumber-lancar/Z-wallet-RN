import * as actionTypes from '../actionTypes';

export const setBalance = (balance) => {
  return {
    type: actionTypes.GET_BALANCE,
    payload: {
      balance,
    },
  };
};
