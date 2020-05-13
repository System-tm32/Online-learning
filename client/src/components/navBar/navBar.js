import React from 'react'
import './navBar.css'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
	return (
		  <nav>
		    <div className="nav-wrapper orange lighten-3">
		      <a href="/" className="brand-logo">Саня Станина</a>
		      <ul className="right hide-on-med-and-down">
		        <li><NavLink to='/'>Главная</NavLink></li>
		        <li><NavLink to='/courses'>Курсы</NavLink></li>
		        <li><NavLink to='/login'>Войти</NavLink></li>
		      </ul>
		    </div>
		  </nav>
	)
}
export default NavBar;