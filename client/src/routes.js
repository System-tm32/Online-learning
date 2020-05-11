import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './pages/authPage/authPage'
import LoginPage from './pages/loginPage/loginPage'


export const useRoutes = isAuthenticated => {
	if(isAuthenticated) {
		return (
		<Switch>
			<Route path='/'>

			</Route>
		</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" exact>
				<Auth />
			</Route>
			<Route path="/login" exact>
				<LoginPage />
			</Route>
		</Switch>
	)
}