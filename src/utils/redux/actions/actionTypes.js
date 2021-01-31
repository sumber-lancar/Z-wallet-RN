import {ActionType} from 'redux-promise-middleware';


export const AUTH_UPDATE_PASSWORD = 'updatePassword'
export const AUTH_CLEAR_STATE = 'clearState';


export const PENDING = `_${ActionType.Pending}`;
export const FULLFILED = `_${ActionType.Fullfilled}`;
export const REJECTED = `${ActionType.Rejected}`;