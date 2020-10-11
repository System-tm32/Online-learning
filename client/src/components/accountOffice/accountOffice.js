import React from 'react';
import './accountOffice.css';

export const AccountOffice = (props) => {
  return (
    <div className="container accountOffice">
      <div className="row">
        <div className="col s8 offset-s4">
          <h2 className="title">Ваши активные курсы</h2>
        </div>
      </div>
      <div className="row">
        <div className="col l4">
          <div className="card">
            <div className="card-image">
              <img
                src="https://sun9-18.userapi.com/c857320/v857320006/89f79/8KaxdS7ymk4.jpg"
                alt="img"
              />
              <span className="card-title">{props.name}</span>
              <div className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </div>
            </div>
            <div className="card-content">
              <p>Email: systemtm32@yandex.ru</p>
            </div>
          </div>
        </div>
        <div className="col l8">
          <div className="row">
            <div className="col m12">
              <h2 className="header">«JavaScript»</h2>
              <div className="card horizontal">
                <div className="card-image">
                  <img
                    src="https://thaunguyen.com/blog/wp-content/uploads/2018/03/closure.jpg"
                    alt="img"
                  />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>
                      Курс «JavaScript» Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
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
  );
};
