import React from 'react'
import './navBar.css'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
	const logoutHandler = (e) => {
		e.preventDefault();
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
		 			{props.userId === '5ebd4aec27673c1f14a1bfba' ? <li><NavLink to='/create-course'>Создать курс</NavLink></li> : null}
		        	<li><NavLink to='/'>Главная</NavLink></li>
			        <li><NavLink to='/courses'>Курсы</NavLink></li>
			        <li><NavLink to={`/profile/${props.userId}`}>Личный кабинет {props.userName}</NavLink></li>
			        <li><NavLink to='/' onClick={logoutHandler}>Выйти</NavLink></li>
			        </React.Fragment>
		        }
		      </ul>
		    </div>
		  </nav>
	)
}

export default NavBar