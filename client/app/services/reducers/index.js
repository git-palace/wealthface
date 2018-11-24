import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import userReducer from './user.js';
import questionsReducer from './questions.js'

export default (history) => combineReducers({
    user: userReducer,
    questions: questionsReducer,
    router: connectRouter(history)
});