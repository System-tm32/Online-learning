import React, { useState } from 'react';
import './formCreateCourse.css';

const formCreateCourse = (props) => {
  const selectHandle = (e) => {};
  return (
    <form className="createCourse_form">
      <div className="input-field">
        <input id="course_name" type="text" />
        <label htmlFor="course_name">Название курса</label>
      </div>
      <div className="input-field">
        <textarea id="course_description" className="materialize-textarea" />
        <label htmlFor="course_description">Краткое описание курса</label>
      </div>
      <h3>Тест</h3>
      <div className="input-field">
        <input id="question1" type="text" />
        <label htmlFor="question1">Вопрос 1</label>
      </div>
      <div className="input-field">
        <input id="answer1" type="text" />
        <label htmlFor="answer1">Ответ 1</label>
      </div>
      <div className="input-field">
        <input id="answer2" type="text" />
        <label htmlFor="answer2">Ответ 2</label>
      </div>
      <div className="input-field">
        <input id="answer3" type="text" />
        <label htmlFor="answer3">Ответ 3</label>
      </div>
      <div className="input-field">
        <input id="answer4" type="text" />
        <label htmlFor="answer4">Ответ 4</label>
      </div>
      <div className="input-field col s12">
        <select value={selectValue} onChange={selectHandle}>
          <option value="default" selected>
            Пусто
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">3</option>
        </select>
        <label>Выберите номер правильного ответа</label>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Добавить вопрос
        <i className="material-icons right">send</i>
      </button>
    </form>
  );
};
export default formCreateCourse;
