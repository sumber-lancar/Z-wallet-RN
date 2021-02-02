import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  token: null,
  id: null,
  name_user: null,
  email_user: null,
  photo_user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        id: action.payload.id,
        name_user: action.payload.nameUser,
        email_user: action.payload.email,
        photo_user: action.payload.photo,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: null,
        id: null,
        name_user: null,
        email_user: null,
        photo_user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
