import { SET_USER_NAME, UPDATE_CORRECT_ANSWERS, UPDATE_WRONG_ANSWERS, GET_USER_NAME } from '../actions/types';

const initialState = {
    name: "",
    correctAnswers: 0,
    wrongAnswers: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload
            }

        case GET_USER_NAME: {
            return {
                ...state
            }
        }

        default:
            return state;
    }
}