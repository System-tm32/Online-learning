import { combineReducers } from 'redux'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import createReducer from './createReducer'
import quizReducer from './quizReducer'

export default combineReducers({
	auth: authReducer,
	course: courseReducer,
	create: createReducer,
	quiz: quizReducer
})