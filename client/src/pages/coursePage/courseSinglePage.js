import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const CourseSinglePage = (props) => {
	// 0 - view | 1 - text | 2 - test | 3 - homeWork
	const [condition, setCondition] = useState(0);
	const conditionHandler = (count) => {
		setCondition(count);
	}
	let courseBlock = (
		<div className="course_wrapper">
			<h2>Курс: {props.title}</h2>
			<img src={props.urlImage} className="course_img"/>
			<p>
				{props.description}
			</p>
		</div>
	)
	if (condition === 1 ) {
		courseBlock = (
		<div className="course_wrapper">
			<h2>Теория</h2>
			<p>
				{props.text}
			</p>
		</div>
		)
	} else if (condition === 2) {
		courseBlock = (
		<div className="course_wrapper">
			<h2>Тест</h2>
			<p>
				{props.quizes.question}
			</p>
			<ul>
				<ol>1. {props.quizes.quiz1['1']}</ol>
				<ol>2. {props.quizes.quiz1['2']}</ol>
				<ol>3. {props.quizes.quiz1['3']}</ol>
				<ol>4. {props.quizes.quiz1['4']}</ol>
				<ol>Правильный ответ. {props.quizes.quiz1.correctAnswer}</ol>
			</ul>
		</div>
		)
	} else if (condition === 3){
	courseBlock = (
		<div className="course_wrapper">
			<h2>Домашнее задание</h2>
			<p>
				{props.homeWork}
			</p>
		</div>
		)
	} else if(condition === 4){
	courseBlock = (
		<div className="course_wrapper">
			<h2>Курс пройден</h2>
			<p>
				Вы прекрасны!
			</p>
			<div className="col l6">
				<Link to={'/courses'} className="waves-effect waves-light btn">Обратно к курсам</Link>
			</div>
		</div>
		)
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col l12">
					{courseBlock}
				</div>
			</div>
			<div className="row">
			{condition !== 4 ? 	
				<div className="col l6">
					<div className="waves-effect waves-light btn" onClick={() => conditionHandler(condition + 1)}>Далее</div>
				</div>
				: null}
				{condition !== 0 ? 				<div className="col l6">
					<div className="waves-effect waves-light btn" onClick={() => conditionHandler(condition - 1)}>Назад</div>
				</div> : null}
			</div>
			
		</div>
	)
}

const mapStateToProps = (state) => {

	return {
		id: state.course.id,
		title: state.course.title,
		description: state.course.description,
		text: state.course.text,
		homeWork: state.course.homeWork,
		quizes: state.course.quizes,
		urlImage: state.course.urlImage

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSinglePage);