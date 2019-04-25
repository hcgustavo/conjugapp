import { SET_USER_NAME, GET_USER, 
        INCREMENT_CORRECT_ANSWERS,
        INCREMENT_WRONG_ANSWERS } from '../actions/types';

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

        case GET_USER: {
            return {
                ...state
            }
        }

        case INCREMENT_CORRECT_ANSWERS:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1
            }


        case INCREMENT_WRONG_ANSWERS:
            return {
                ...state,
                wrongAnswers: state.wrongAnswers + 1
            }


        default:
            return state;
    }
}