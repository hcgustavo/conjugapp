import { FETCH_QUESTIONS } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}