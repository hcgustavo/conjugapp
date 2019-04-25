import { SET_USER_NAME, GET_USER_NAME } from './types';

export const setUserName = (name) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
};