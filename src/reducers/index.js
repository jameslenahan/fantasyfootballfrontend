import { combineReducers } from 'redux';

import currentUsersReducer from './currentUsersReducer.js';
import loginForm from './loginForm.js'
import signupForm from './signupForm.js'
import userReducer from './userReducer.js'
import playersReducer from './playersReducer.js'
import playerReducer from './playerReducer.js'

const rootReducer = combineReducers({
    playersReducer,
    currentUsersReducer,
    loginForm,
    signupForm,
    userReducer,
    playerReducer
})

export default rootReducer