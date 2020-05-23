import axios from 'axios'

export const createQuizQuestion = (item) => {
	return {
		type: 'CREATE_QUIZ_QUESTION',
		item
	}
}

export const resetQuizCreation = () => {
	return {
		type: 'RESET_QUIZ_CREATION'
	}
}

export const finishCreateCourse = (dataCourse) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios({
				method: 'post',
				url: '/api/course/create-course',
				data: {
					...dataCourse
				}
			});
			const data = await response.data;
		} catch(e) {
			console.log(e)
		}
		dispatch(resetQuizCreation());
	}
}