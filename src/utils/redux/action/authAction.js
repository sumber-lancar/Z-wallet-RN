import * as actionTypes from '../actionTypes';

export const login = (token, id, name, email, photo) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      token: token,
      id: id,
      nameUser: name,
      email: email,
      photo: photo,
    },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
