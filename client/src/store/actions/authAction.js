
export const auth = (form, isLogin) => {
	return async dispatch => {
		try {
			const body = JSON.stringify(form);
			const headers = {
				'Content-Type': 'application/json'
			}
			let url = '/api/auth/register'
			if (isLogin) {
				url = '/api/auth/login'
			} 
			const response = await fetch(url, {
				method: 'POST', body, headers
			})
			const data = await response.json();
			if(!response.ok) {
				
			}
			if (!isLogin) {
				dispatch(authRequest(data.message));
			}
			dispatch(authSuccess(data.token, data.userId, data.name))

		} catch (e){
			throw e
		}
	}
}

export const authRequest = (error) => {
	return {
		type: 'AUTH_REQUEST',
		payload: {
			error
		}
	}
}

export const logout = () => {
	return {
		type: 'AUTH_LOGOUT'
	}
}

export const authSuccess = (token, userId, name) => {
	return {
		type: 'AUTH_SUCCESS',
		payload: {
			token, userId, name
		}
	}
}

export const autoLogin = () => {
	return dispatch => {
		const data = JSON.parse(localStorage.getItem('userData'))
		if (data === null) {
			return
		}
		//console.log(data.token)
		if (!data.token) {
			dispatch(logout())
		} else {
			dispatch(authSuccess(data.token, data.userId, data.name));
		}
	}
}