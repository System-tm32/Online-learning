import React from 'react'
import './navBar.css'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
	console.log(props)
	const logoutHandler = (e) => {
		e.preventDefault();
		console.log('sidr')
		props.logout();
	}
	return (
		  <nav>
		    <div className="nav-wrapper orange lighten-3">
		      <a href="/" className="brand-logo">Саня Станина</a>
		      <ul className="right hide-on-med-and-down">
		        { !props.isAuthenticated 
		        	? 
		        	<React.Fragment>
		        	<li><NavLink to='/'>Главная</NavLink></li>
		        	<li><NavLink to='/login'>Войти</NavLink></li>
		        	</React.Fragment>
		        	:
		        	<React.Fragment>
			        <li><NavLink to='/courses'>Курсы</NavLink></li>
			        <li><NavLink to={`/profile/:id${props.userId}`}>ЛК {props.userName}</NavLink></li>
			        <li><NavLink to='/' onClick={logoutHandler}>Выйти</NavLink></li>
			        </React.Fragment>
		        }
		      </ul>
		    </div>
		  </nav>
	)
}

export default NavBar