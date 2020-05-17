import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleCourse} from '../../store/actions/courseAction'

const CourseSinglePage = (props) => {
	// 0 - view | 1 - text | 2 - test | 3 - homeWork
	const {getSingleCourse} = props;
	const paramId = props.match.params.id;
	useEffect(()=>{
		getSingleCourse(paramId)
	},[paramId]);

	const [condition, setCondition] = useState(0);
	const conditionHandler = (count) => {
		setCondition(count);
	}

	let {text, title, urlImage, homeWork, description} = props.course[0];
	let quiz = {}
	if (props.course[0].quizes !== undefined) {
		console.log(JSON.parse(props.course[0].quizes))
		quiz = JSON.parse(props.course[0].quizes);
	}
	console.log(Object.keys(quiz))
	let courseBlock = (
		<div className="course_wrapper">
			<h2>Курс: {title}</h2>
			<img src={urlImage} className="course_img"/>
			<p>
				{description}
			</p>
		</div>
	)
	if (condition === 1 ) {
		courseBlock = (
		<div className="course_wrapper">
			<h2>Теория</h2>
			<p>
				{text}
			</p>
		</div>
		)
	} else if (condition === 2) {
		courseBlock = (
		<div className="course_wrapper">
			<h2>Тест</h2>

			{Object.keys(quiz).map(quizName => {
				console.log('quizName');
				console.log(quiz[quizName]);
				const singleQuiz = quiz[quizName];
				return Object.keys(singleQuiz).map(quizTitle => {
					return (
						<React.Fragment key={quizTitle}>
						<ul>
							{singleQuiz[quizTitle]}
						</ul>
						</React.Fragment>
					)
				})
			})}

		</div>
		)
	} else if (condition === 3){
	courseBlock = (
		<div className="course_wrapper">
			<h2>Домашнее задание</h2>
			<p>
				{homeWork}
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
		course: state.course
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getSingleCourse: (id) => dispatch(getSingleCourse(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSinglePage);