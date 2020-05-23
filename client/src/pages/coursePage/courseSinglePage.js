import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ActiveQuiz from '../../components/activeQuiz/activeQuiz'
import FinishedQuiz from '../../components/finishedQuiz/finishedQuiz'
import {getSingleCourse, quizAnswerClick, fetchQuizSuccess, retryQuiz} from '../../store/actions/courseAction'

const CourseSinglePage = (props) => {
	// 0 - view | 1 - text | 2 - test | 3 - homeWork
	const {getSingleCourse, fetchQuizSuccess} = props;
	const paramId = props.match.params.id;
	let {text, title, urlImage, homeWork, description} = props.course[0];
	let quiz = {}
	if (props.course[0].quizes !== undefined) {
		console.log(JSON.parse(props.course[0].quizes))
		quiz = JSON.parse(props.course[0].quizes);
	}
	useEffect(()=>{
		getSingleCourse(paramId);
	},[paramId]);

	const [condition, setCondition] = useState(0);
	const conditionHandler = (count) => {
		setCondition(count);
	}

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
			<div className="quiz">

			<div className="quiz-wrapper">
				{
					props.isFinished ?
					<FinishedQuiz 
						results={props.results}
						quiz={props.quiz}
						onRetry={props.retryQuiz}
					/>
					:
					<ActiveQuiz 
					answers={props.quiz[props.activeQuestion].answers}
					question={props.quiz[props.activeQuestion].question}
					onAnswerClick={props.quizAnswerClick}
					quizLength={props.quiz.length}
					answerNumber={props.activeQuestion + 1}
					state={props.answerState}
					/>
				}
			</div>
		</div>
			

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
				<Link to={'/courses'} className="waves-effect waves-light btn" onClick={() => props.retryQuiz()}>Обратно к курсам</Link>
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
		course: state.course,
		results: state.quiz.results,
		isFinished: state.quiz.isFinished,
		activeQuestion: state.quiz.activeQuestion,
		answerState: state.quiz.answerState,
		quiz: state.quiz.quiz,
		loading: state.quiz.loading
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		retryQuiz: () => dispatch(retryQuiz()),
		fetchQuizSuccess: item => dispatch(fetchQuizSuccess(item)),
		getSingleCourse: (id) => dispatch(getSingleCourse(id)),
		quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSinglePage);