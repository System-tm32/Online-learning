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

		} catch(e) {
			console.log(e)
		}
	}
}
