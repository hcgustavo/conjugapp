import { SET_USER_NAME, GET_USER, 
        INCREMENT_CORRECT_ANSWERS, DECREMENT_CORRECT_ANSWERS, 
        INCREMENT_WRONG_ANSWERS, DECREMENT_WRONG_ANSWERS } from './types';

export const setUserName = (name) => dispatch => {
    console.log("dispatch set username");
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
};

export const getUser = () => dispatch => {
    dispatch({
        type: GET_USER
    })
};

export const incrementCorrectAnswers = () => dispatch => {
    dispatch({
        type: INCREMENT_CORRECT_ANSWERS
    })
};

export const incrementWrongAnswers = () => dispatch => {
    dispatch({
        type: INCREMENT_WRONG_ANSWERS
    })
};