import React from 'react'
import './finishedQuiz.css'

const FinishedQuiz = (props) => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}
		return total;
	}, 0);
	return (
		<div className="finished-quiz">
			<ul>
				{ Object.keys(props.quiz).map( (quizItem, index) => {
					const cls = [
						props.results[quizItem.id] === 'error' ? 'error' : 'success'
					];
					return (
						<li key={index}>
							<strong>{index + 1}. </strong>
							{props.quiz[quizItem].question}
							<span className={cls.join(' ')}>#</span>
						</li>
					)
				}) }
			</ul>

			<p> Правильно {successCount} из {Object.keys(props.quiz).length}</p>

			<div>

			</div>
		</div>
	)
}

export default FinishedQuiz;