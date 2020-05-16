import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
//import FormCreateCourse from '../../components/formCreateCourse/formCreateCourse'

const CreateCoursePage = (props) => {
	const [form, setForm] = useState();
	const inputHandler = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	}
	const testAxios = async (e) => {
		e.preventDefault();
		console.log(form);
		try {
			const response = await axios({
				method: 'post',
				url: '/api/course/create-course',
				data: {
					...form
				}
			});
			const data = await response.data;
			console.log(data);
		} catch(e) {
			console.log(e)
		}
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col l12">
					<h2>Создай курс по шагам</h2>
				</div>
			</div>
			<div className="row">
				<div className="col l12">
					<form className="createCourse_form">
					  <div className="input-field">
				          <input id="course_name" type="text"  onChange={inputHandler} name="title" />
				          <label htmlFor="course_name">Название курса</label>
			          </div>
			           <div className="input-field">
				          <input id="urlImage" type="text"  onChange={inputHandler} name="urlImage" />
				          <label htmlFor="urlImage">Изображение</label>
			          </div>
			          <div className="input-field">
				          <textarea id="course_description" className="materialize-textarea" name="description" onChange={inputHandler}/>
				          <label htmlFor="course_description" >Краткое описание курса</label>
			          </div>
			          <h3>Теория</h3>
			          <div className="input-field">
				          <textarea id="course_theory" className="materialize-textarea" name="text" onChange={inputHandler} />
				          <label htmlFor="course_theory">Текст теории</label>
			          </div>
			          <h3>Тест</h3>
					  <div className="input-field">
				          <input id="question1" type="text" name="question" onChange={inputHandler}/>
				          <label htmlFor="question1" >Вопрос 1</label>
			          </div>
					  <div className="input-field">
				          <input id="answer1" type="text" name="answer1" onChange={inputHandler}/>
				          <label htmlFor="answer1">Ответ 1</label>
			          </div>
					  <div className="input-field">
				          <input id="answer2" type="text" name="answer2" onChange={inputHandler}/>
				          <label htmlFor="answer2">Ответ 2</label>
			          </div>
					  <div className="input-field">
				          <input id="answer3" type="text" name="answer3" onChange={inputHandler}/>
				          <label htmlFor="answer3">Ответ 3</label>
			          </div>
					  <div className="input-field">
				          <input id="answer4" type="text" name="answer4" onChange={inputHandler}/>
				          <label htmlFor="answer4">Ответ 4</label>
			          </div>
			          <div className="input-field col s12">
					    <select onChange={inputHandler} name="correctAnswer" >
					      <option value="default"></option>
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4">4</option>
					    </select>
					    <label>Выберите номер правильного ответа</label>
					  </div>
					  <div className="input-field col s12">
			            <div className="btn waves-effect waves-light" type="submit">
			            	Добавить вопрос
						    <i className="material-icons right">send</i>
						</div>
					  </div>
					<h3>Задание</h3>
			          <div className="input-field">
				          <textarea id="course_hw" className="materialize-textarea" name="homeWork" onChange={inputHandler} />
				          <label htmlFor="course_hw">Текст задания</label>
			          </div>
					  <div className="input-field col s12">
			            <div className="btn waves-effect waves-light" type="submit" name="action" onClick={testAxios}>
			            	Создать
						    <i className="material-icons right">send</i>
						</div>
					  </div>			          
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps)(CreateCoursePage);