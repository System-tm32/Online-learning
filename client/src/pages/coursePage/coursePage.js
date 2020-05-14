import React, {useEffect} from 'react'
import './coursePage.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getCourseList} from '../../store/actions/courseAction'

const CoursePage = (props) => {
	useEffect(() =>{
		props.getCourseList();
	}, props.course);
	console.log(Object.keys(props.course))
	return (
		<div className="container course_block">
			<div className="row">
				<div className="col s6">
					  <div className="card medium">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="office.jpg" alt="diplom"/>
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
					      <p>Приступить</p>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">ДИПЛОМ ЗА 24 ЧАСА РЕАЛЬНО<i className="material-icons right">close</i></span>
					      <p>{props.description}</p>
					    </div>
					  </div>
				</div>
				<div className="col s6">
					  <div className="card medium">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="office.jpg" alt="diplom" />
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">Диплом за 12часа<i className="material-icons right">more_vert</i></span>
					      <p><a href="/">Приступить</a></p>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">ДИПЛОМ ЗА 12 ЧАСА РЕАЛЬНО<i className="material-icons right">close</i></span>
					      <p>У тебя осталось 12 часа до диплома, а готов только титульник! Не проблема, с нашим курсом ты напишешь диплом всего за 10 часов на любую тему на оценку не ниже 4. Оформляй подписку всегоз за 11.99$ в час и не пожалеешь!</p>
					    </div>
					  </div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {

	return {
		title: state.course.title,
		description: state.course.description,
		text: state.course.text,
		homeWork: state.course.homeWork,
		course: state.course

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getCourseList: () => dispatch(getCourseList())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);