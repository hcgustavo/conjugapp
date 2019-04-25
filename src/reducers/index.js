import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';

export default combineReducers({
    user: userReducer,
    questions: questionsReducer
});