import { combineReducers } from 'redux';

import currentUsersReducer from './currentUsersReducer.js';
import loginForm from './loginForm.js'
import signupForm from './signupForm.js'
import userReducer from './userReducer.js'

const rootReducer = combineReducers({

    currentUsersReducer,
    loginForm,
    signupForm,

    userReducer
})

export default rootReducer