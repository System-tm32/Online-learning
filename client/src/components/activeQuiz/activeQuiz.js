import React from 'react'
import './activeQuiz.css'
import AnswersList from './answersList/answersList'

const ActiveQuiz = (props) => (
	<div className="active-quiz">
		<p className="question"> 
			<span> 
				<strong>{props.answerNumber} </strong>
				{props.question}
			</span>

			<small> {props.answerNumber} iz {props.quizLength}</small>
		</p>

		<AnswersList 
			answers={props.answers}
			state={props.state}
			onAnswerClick={props.onAnswerClick}
		/>

	</div>
)

export default ActiveQuiz