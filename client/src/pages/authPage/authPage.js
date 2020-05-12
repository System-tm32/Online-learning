import React from 'react';
import './authPage.css';

const Auth = () => {
	return (
		<React.Fragment>
		<div className="wt_block">
			<div className="container">
				<div className="row">
					<div className="col s12"> 
						<section className="wt_block-content">
							<h1 className="title">Не откладывай <br/>запланированное<br /> на завтра!</h1>
							<div className="description">Начни подписываться на интересующие тебя курсы</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		<div className="wt_section">
		<div className="container">
			<div className="row">
				<div className="col s12">
					<h2 className="wt_label">Что тебя ждет?</h2>
				</div>
			</div>
			<div className="row block">
				<div className="col l4 s12">
				      <div className="card light-green accent-1">
				        <div className="card-content ">
				          <span className="card-title">Теория</span>
				          <p>Теория у нас - это не скучная научная статья из предметной области. Теория это набор необходимой информации, которая представлена не только текстом, но и визуализирована приятной графикой.</p>
				        </div>
				        <div className="card-action">
				          <a href="/">Начать</a>
				        </div>
				      </div>
				</div>
				<div className="col l4 s12">
					 <div className="card light-green accent-1">
				        <div className="card-content ">
				          <span className="card-title">Тест</span>
				          <p>После теории идет интерактивный тест с вопросами для закрепления материала. </p>
				        </div>
				        <div className="card-action">
				          <a href="/">Пройти тест</a>
				        </div>
					 </div>
				</div>
				<div className="col l4 s12">
					 <div className="card light-green accent-1">
					        <div className="card-content ">
					          <span className="card-title">Домашнее задание</span>
					          <p>Самая интересная часть обучения, где необходимо хорошо знать теорию и применить её на практике. Выполненное домашнее задание отправляй на проверку.</p>
					        </div>
					        <div className="card-action">
					          <a href="/">Получить задание</a>
					        </div>
					 </div>
				</div>
			</div>
		</div>
		</div>
		</React.Fragment>
	)
}

export default Auth;