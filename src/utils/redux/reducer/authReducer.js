import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isLogin: false,
  token: null,
  id: null,
  name_user: null,
  email_user: null,
  photo_user: null,
  phone_user: null,
  firstName_user: null,
  lastName_user: null,
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
        phone_user: action.payload.phone,
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
        phone_user: null,
      };
    case actionTypes.SET_PHONE:
      return {
        ...state,
        phone_user: action.payload.number,
      };
    case actionTypes.SET_PHOTO:
      return {
        ...state,
        photo_user: action.payload,
      };
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        name_user: action.payload.updateName,
      };
    default:
      return state;
  }
};

export default authReducer;
