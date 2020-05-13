import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './pages/authPage/authPage'
import LoginPage from './pages/loginPage/loginPage'
import CoursePage from './pages/coursePage/coursePage'

export const useRoutes = isAuthenticated => {
	if(isAuthenticated) {
		return (
		<Switch>
			<Route path='/' exact>
				<Auth />
			</Route>
			<Route path='/profile/:id'>

			</Route>
			<Route path='/courses'>
				<CoursePage />
			</Route>
			<Redirect to="/" />
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
			<Route path='/courses'>
				<LoginPage />
			</Route>
			<Redirect to="/" />
		</Switch>
	)
}