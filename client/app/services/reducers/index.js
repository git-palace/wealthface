import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import userReducer from './user.js';

export default (history) => combineReducers({
    user: userReducer,
    router: connectRouter(history)
});