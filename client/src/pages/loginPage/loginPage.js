import React, {useState} from 'react'
import './loginPage.css'

const Login = () => {
	const [isRegistration, setIsRegistration] = useState(false);

	const statusFormHandler = (isStatus) => {
		setIsRegistration(!isStatus);
	}
	const authForm = (
		<form className="authForm">

	     <div className="input-field">
	          <input id="email" type="email" />
	          <label>Почта</label>
	      </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label>Пароль</label>
        </div>

		<div className="waves-effect waves-light btn">Войти</div>
		<div className="waves-effect waves-light btn" onClick={() => statusFormHandler(isRegistration)}>Регистрация</div>
	</form>
	)
	const registrationForm = (
		<form className="authForm">
			<div className="input-field">
	          <input id="text" type="text" />
	          <label>Имя</label>
	      </div>
	     <div className="input-field">
	          <input id="email" type="email" />
	          <label>Почта</label>
	      </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label>Пароль</label>
        </div>
		<div className="waves-effect waves-light btn">Зарегистрироваться</div>
		<div className="waves-effect waves-light btn grey lighten-2" onClick={() => statusFormHandler(isRegistration)}>Назад</div>
	</form>
	)
	return (
		<div className="container block_login">
			<div className="row">
				<div className="col s12">
				{!isRegistration ? authForm :
					registrationForm

				}
				</div>
			</div>
		</div>
	)
}

export default Login;