import { SET_USER_NAME, GET_USER_NAME } from './types';

export const setUserName = (name) => dispatch => {
    console.log("dispatch set username");
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
};

export const getUserName = () => dispatch => {
    dispatch({
        type: GET_USER_NAME
    })
}