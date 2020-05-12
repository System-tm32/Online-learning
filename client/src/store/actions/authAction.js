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
