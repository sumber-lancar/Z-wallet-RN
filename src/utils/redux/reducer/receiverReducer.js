import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  id: null,
  name_user: null,
  photo: null,
  phone: null,
};

const receiverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_RECEIVER:
      return {
        ...state,
        id: action.payload.id,
        name_user: action.payload.nameUser,
        photo: action.payload.photo,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default receiverReducer;
