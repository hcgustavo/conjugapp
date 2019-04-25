import { FETCH_QUESTIONS } from './types';

export const fetchQuestions = () => dispatch => {
    fetch('https://conjugapp-backend.herokuapp.com/api/questions')
    .then(res => res.json())
    .then(questions => 
        dispatch({
            type: FETCH_QUESTIONS,
            payload: questions
        })
    );
};