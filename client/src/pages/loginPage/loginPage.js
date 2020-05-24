import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/authAction'
import './loginPage.css'
import {useMessage} from '../../hooks/message.hook'

const Login = (props) => {
	const [isRegistration, setIsRegistration] = useState(false);
	const message = useMessage();
	const [form, setForm] = useState({
		email: '', password: '', name: ''
	});
	const changeHandler = event => {
		setForm({...form, [event.target.name]: event.target.value})
	}

	useEffect(()=>{
		message(props.error);
	}, [props.error, message])
	const statusFormHandler = (isStatus) => {
		setIsRegistration(!isStatus);
	}
	const loginHandler = () => {
		props.auth({...form}, true);

	}
	const registerHandler = () => {
		props.auth({...form}, false);

	}
	const authForm = (
		<form className="authForm">
	      <div className="input-field">
	          <input id="email" type="email" name="email" onChange={changeHandler} />
	          <label>Почта</label>
	      </div>
	        <div className="input-field">
	          <input id="password" type="password" name="password" onChange={changeHandler} />
	          <label>Пароль</label>
	        </div>

		<div className="waves-effect waves-light button primary" onClick={loginHandler}>Войти</div>
		<div className="waves-effect waves-light button success" onClick={() => statusFormHandler(isRegistration)}>Регистрация</div>
	</form>
	)
	const registrationForm = (
		<form className="authForm">
			<div className="input-field">
	          <input id="text" type="text" name="name" onChange={changeHandler}/>
	          <label>Имя</label>
	      </div>
	     <div className="input-field">
	          <input id="email" type="email" name="email" onChange={changeHandler}/>
	          <label>Почта</label>
	      </div>
        <div className="input-field">
          <input id="password" type="password" name="password" onChange={changeHandler}/>
          <label>Пароль</label>
        </div>
		<div className="waves-effect waves-light button primary" onClick={registerHandler}>Зарегистрироваться</div>
		<div className="waves-effect waves-light button success" onClick={() => statusFormHandler(isRegistration)}>Назад</div>
	</form>
	)
	return (
		<div className="container block_login">
			<div className="row">
				<div className="col s6">
					<div className="block_login_description">
						<h3>Какой-то заголовок</h3>
						<p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis Curabitur non nulla sit amet nisl tempus convallis quis ac</p>
					</div>
				</div>
				<div className="col s6">
				{!isRegistration ? authForm :
					registrationForm
				}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		error: state.auth.error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);