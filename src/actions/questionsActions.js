import { FETCH_QUESTIONS } from './types';

export const fetchQuestions = () => dispatch => {
    fetch('http://localhost:8080/api/questions')
    .then(res => res.json())
    .then(questions => 
        dispatch({
            type: FETCH_QUESTIONS,
            payload: questions
        })
    );
};