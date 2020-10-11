import React from 'react';
import './authPage.css';
import Button from '../../components/ui/button/button';

const Auth = () => {
  return (
    <React.Fragment>
      <div className="wt_block">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <section className="wt_block-content">
                <h1 className="title">
                  Проходи любые
                  <br /> курсы в любое время!
                </h1>
                <div className="description">Какое-то описание </div>
                <Button type={'primary'}>Начать прохождение</Button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="wt_section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h2 className="wt_label">Структура каждого курса </h2>
            </div>
          </div>
          <div className="row block">
            <div className="col l4 s12">
              <div className="card white">
                <div className="card-content ">
                  <span className="card-title">
                    <span className="title_number">1</span>Теория
                  </span>
                  <p>
                    Теория это набор необходимой информации, которая представлена не только текстом,
                    но и визуализирована приятной графикой.
                  </p>
                </div>
                <div className="card-action">
                  <Button type={'success'}>Читать теорию</Button>
                </div>
              </div>
            </div>
            <div className="col l4 s12">
              <div className="card white">
                <div className="card-content ">
                  <span className="card-title">
                    <span className="title_number">2</span>Тест
                  </span>
                  <p>
                    После теории идет интерактивный тест с вопросами для закрепления материала.
                    Обдумай теорию, чтобы успешно пройти этот этап.{' '}
                  </p>
                </div>
                <div className="card-action">
                  <Button type={'success'}>Пройти тест</Button>
                </div>
              </div>
            </div>
            <div className="col l4 s12">
              <div className="card white">
                <div className="card-content ">
                  <span className="card-title">
                    <span className="title_number">3</span>Домашнее задание
                  </span>
                  <p>
                    Самая интересная часть обучения, где необходимо хорошо знать теорию и применить
                    её на практике.
                  </p>
                </div>
                <div className="card-action">
                  <Button type={'success'}>Получить задание</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
