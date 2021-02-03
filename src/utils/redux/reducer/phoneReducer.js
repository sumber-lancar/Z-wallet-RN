import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  no_telp: '',
};

const phoneReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PHONE:
      return {
        ...state,
        no_telp: action.payload.phoneNum,
      };

    default:
      return state;
  }
};

export default phoneReducer;
