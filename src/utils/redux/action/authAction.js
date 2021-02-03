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

export const setPhone = (number) => {
  return {
    type: actionTypes.SET_PHONE,
    payload: {
      number: number
    }
  }
}
export const updatePhoto = (data) => {
  return {
    type: actionTypes.SET_PHOTO,
    payload: data
  }
}

export const updateName = (updateName) => {
  return {
    type: actionTypes.SET_PROFILE,
    payload: {
      updateName: updateName
    }
  }
}
