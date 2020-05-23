import axios from 'axios'

export const getCourseList = () => {
	return async dispatch => {
		try {
			const response = await axios({
				method: 'get',
				url: '/api/course/course-list',
			});
			const data = await response.data;
			dispatch(getCourse(data));
		} catch(e) {
			console.log(e)
		}
	}
}

export const getCourse = (course) => {
	return {
		type: 'GET_COURSES',
		payload: course
	}
}

export const getSingleCourse = (id) => {
	return async dispatch => {
		try {
			const url = `/api/course/singleCourse/${id}`;
			const response = await axios({
				method: 'get',
				url: url
			});
			const data = await response.data;
			dispatch(getCourse(data));
			dispatch(fetchQuizSuccess(data[0].quizes));
		} catch(e) {
			console.log(e)
		}
	}
}
export const fetchQuizSuccess = (quiz) => {
	return {
		type: 'FETCH_QUIZ_SECCESS',
		quiz
	}
}

export const quizSetState = (answerState, results) => {
	return {
		type: 'QUIZ_SET_STATE',
		answerState,
		results
	}
}

export const finishQuiz = () => {
	return {
		type: 'FINISH_QUIZ'
	}
}

export const quizNextQuestion = (number) => {
	return {
		type: 'QUIZ_NEXT_QUESTION',
		number
	}
}

export const quizAnswerClick = answerId => {
	return (dispatch, getState) => {
		const state = getState().quiz;
		if (state.answerState) {
			const key = Object.keys(state.answerState)[0]
			if (state.answerState[key] === 'success') {
				return
			}
		}

		const question = state.quiz[state.activeQuestion];
		const results = state.results;

		if (question.rightAnswerId === answerId) {
			if(!results[question.id]) {
				results[question.id] = 'success'
			}

			dispatch(quizSetState({[answerId]: 'success'}, results))


			const timeout = setTimeout(() => {

				if (isQuizFinished(state)) {
					dispatch(finishQuiz());
				} else {
					dispatch(quizNextQuestion(state.activeQuestion + 1));
				}

				clearTimeout(timeout);
			}, 1000);
		} else {
			results[question.id] = 'error'
			dispatch(quizSetState({[answerId]: 'error'}, results))
		}
	}
}
export const retryQuiz = () => {
	return {
		type: 'QUIZ_RETRY'
	}
}

const isQuizFinished = (state) =>{
	return state.activeQuestion + 1 === Object.keys(state.quiz).length
}

