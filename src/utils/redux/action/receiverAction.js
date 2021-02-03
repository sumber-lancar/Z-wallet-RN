import * as actionTypes from '../actionTypes';

export const setReceiver = (id, name_user, photo, phone) => {
  return {
    type: actionTypes.SET_RECEIVER,
    payload: {
      id,
      nameUser: name_user,
      photo,
      phone,
    },
  };
};
