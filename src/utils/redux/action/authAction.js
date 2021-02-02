import * as actionTypes from '../actionTypes';

export const login = (token, id, name, email, photo, phone) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      token: token,
      id: id,
      nameUser: name,
      email: email,
      photo: photo,
      phone: phone,
    },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
