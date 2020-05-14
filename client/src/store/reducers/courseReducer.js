const initialState = {
	quizes: null,
	title: null,
	description: null,
	text: null,
	homeWork: null,
	urlImg: null
}

const courseReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_COURSES':
			return {
				...state, title: action.payload.title, quizes: JSON.parse(action.payload.quizes), text: action.payload.text, description: action.payload.description, homeWork: action.payload.homeWork
			}
		default:
			return state
	}
}

export default courseReducer;