import React from 'react'
import './coursePage.css'

const CoursePage = () => {
	return (
		<div className="container course_block">
			<div className="row">
				<div className="col s6">
					  <div className="card medium">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="office.jpg" alt="diplom"/>
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">Диплом за 24часа<i className="material-icons right">more_vert</i></span>
					      <p><a href="/">Приступить</a></p>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">ДИПЛОМ ЗА 24 ЧАСА РЕАЛЬНО<i className="material-icons right">close</i></span>
					      <p>У тебя осталось 24 часа до диплома, а готов тольок титульник! Не проблема, с нашим курсом ты напишешь диплом всего за 23 часа на любую тему на оценку не ниже 4. Оформляй подписку всегоз а 5.99$ в час и не пожалеешь!</p>
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

export default CoursePage;