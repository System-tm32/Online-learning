import axios from 'axios'


export const auth = (form, isLogin) => {
	return async dispatch => {
		try {
			const body = JSON.stringify(form);
			const headers = {
				'Content-Type': 'application/json'
			}
			const response = await fetch('/api/auth/register', {
				method: 'POST', body, headers
			})
			console.log(form);
			const data = await response.json();
			console.log(data);

			if(!response.ok) {
				
			}
			console.log(data);
			return data
		} catch (e){
			throw e
		}
	}
}

export const logout = () => {
	return {
		type: 'AUTH_LOGOUT'
	}
}

export const authSuccess = (token) => {
	return {
		type: 'AUTH_SUCCESS',
		payload: {
			token
		}
	}
}
