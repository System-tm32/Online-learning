import React from 'react'

const Footer = () => {
	return (
		 <footer className="page-footer grey darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Название</h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Меню</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Личный кабинет</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Курсы</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Статьи</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">Пользовательское соглашение</a>
            </div>
          </div>
        </footer>
            
	)
}

export default Footer;