
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
			const expirationDate = new Date(new Date().getTime() + 3600*1000);
			dispatch(authSuccess(data.token, data.userId, data.name, expirationDate))

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

export const authSuccess = (token, userId, name, expDate) => {
	return {
		type: 'AUTH_SUCCESS',
		payload: {
			token, userId, name, expDate
		}
	}
}

export const autoLogout = (time) => {
	return dispatch => {
		setTimeout(() =>{
			dispatch(logout())
		}, time * 1000)
	}
}

export const autoLogin = () => {
	return dispatch => {
		const data = JSON.parse(localStorage.getItem('userData'))
		if (!data) {
			console.log('ya tyt')
			dispatch(logout())
		} else {
			const expirationDate = new Date(data.expDate);
			if (expirationDate <= new Date()) {
				console.log('ya tyt2')
				dispatch(logout())
			} else {
				dispatch(authSuccess(data.token, data.userId, data.name, expirationDate));
				dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
			}
		}

	}
}