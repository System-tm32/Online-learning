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
				...state, id: action.payload.id, title: action.payload.title, quizes: JSON.parse(action.payload.quizes), text: action.payload.text, description: action.payload.description, homeWork: action.payload.homeWork, urlImage: action.payload.urlImage
			}
		default:
			return state
	}
}

export default courseReducer;