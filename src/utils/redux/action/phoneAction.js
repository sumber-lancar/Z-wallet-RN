import * as actionTypes from '../actionTypes';

export const phoneNumber = (phoneNum) => {
  return {
    type: actionTypes.GET_PHONE,
    payload: {
      phoneNum: phoneNum,
    },
  };
};
