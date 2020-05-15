import React from 'react'
import './accountOffice.css'

export const AccountOffice = (props) => {
	return (
		<div className="container accountOffice">
			<div className="row">
			 	<div className="col s8 offset-s4"><h2 className="title">Ваши активные курсы</h2></div>
			</div>
			<div className="row">
						<div className="col l4">
		      <div className="card">
		        <div className="card-image">
		          <img src="https://www.1zoom.ru/big2/60/175546-Sepik.jpg" alt="img"/>
		          <span className="card-title">{props.name}</span>
		          <div className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></div>
		        </div>
		        <div className="card-content">
		          <p>Описание нужно добавить с сервера.</p>
		        </div>
		      </div>
				</div>
				  <div className="col l8">
				  	<div className="row">
				  		<div className="col m12">
				  			<h2 className="header">Как написать диплом за 24 часа с нуля?</h2>
							    <div className="card horizontal">
							      <div className="card-image">
							        <img src="https://avatars.mds.yandex.net/get-pdb/1338671/f7ee2cd5-4f9e-4187-9a62-551bc499425f/s1200?webp=false" alt="img" />
							      </div>
							      <div className="card-stacked">
							        <div className="card-content">
							          <p>Какой-то курс, описание которого нужно получить с сервера</p>
							        </div>
							        <div className="card-action">
							          <a href="/">Продолжить</a>
							        </div>
							      </div>
							    </div>
				  		</div>
				  	<div className="col m12">
				  			<h2 className="header">Как написать диплом за 12 часа с нуля?</h2>
							    <div className="card horizontal">
							      <div className="card-image">
							        <img src="https://avatars.mds.yandex.net/get-pdb/1338671/f7ee2cd5-4f9e-4187-9a62-551bc499425f/s1200?webp=false"  alt="img"/>
							      </div>
							      <div className="card-stacked">
							        <div className="card-content">
							          <p>Какой-то курс, описание которого нужно получить с сервера</p>
							        </div>
							        <div className="card-action">
							          <a href="/">Продолжить</a>
							        </div>
							      </div>
							    </div>
				  		</div>
				  	</div>
	
				  </div>
			</div>
		</div>
	)
}