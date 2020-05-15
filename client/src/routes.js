import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './pages/authPage/authPage'
import LoginPage from './pages/loginPage/loginPage'
import CoursePage from './pages/coursePage/coursePage'
import PrivatePage from './pages/privatePage/privatePage'
import createCoursePage from './pages/coursePage/createCoursePage'

export const useRoutes = (isAuthenticated, id) => {
	if(isAuthenticated) {
		return (
		<Switch>
			<Route path='/' exact>
				<Auth />
			</Route>
			{id === '5ebd4aec27673c1f14a1bfba' ? <Route path='/create-course' component={createCoursePage} /> : null}
			<Route path='/profile/:id' component={PrivatePage} />
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