import React from 'react';
import { connect } from 'react-redux';
import { createQuizQuestion, finishCreateCourse } from '../../store/actions/createAction';
import Input from '../../components/ui/input/input';
import Select from '../../components/ui/select/select';
import Button from '../../components/ui/button/button';
import JoditEditor from 'jodit-react';
import './coursePage.css';

function validate(value, validation = null) {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  return isValid;
}

function validateForm(formControls) {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
}

function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  };
}
function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      id: number,
      errorMessage: 'Значение не может быть пустым',
    },
    { required: true },
  );
}
function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Введите вопрос',
        errorMessage: 'Вопрос не может быть пустым',
      },
      { required: true },
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

class CreateCoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef(null);
  }
  state = {
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
    body: {
      text: '',
    },
  };

  addQuestionHandler = (e) => {
    e.preventDefault();

    const questionItem = {
      question: this.state.formControls.question.value,
      id: this.props.quiz.length + 1,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: this.state.formControls.option1.value, id: this.state.formControls.option1.id },
        { text: this.state.formControls.option2.value, id: this.state.formControls.option2.id },
        { text: this.state.formControls.option3.value, id: this.state.formControls.option3.id },
        { text: this.state.formControls.option4.value, id: this.state.formControls.option4.id },
      ],
    };

    this.props.createQuizQuestion(questionItem);

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };
  createQuizHandler = (e) => {
    e.preventDefault();

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
    const course = {
      quizes: { ...this.props.quiz },
      body: this.state.body,
    };
    this.props.finishCreateCourse(course);
  };
  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };
  renderControls = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <div key={index + controlName}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.shouldValidate}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) => this.changeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </div>
      );
    });
  };
  selectChangeHandler = (e) => {
    this.setState({
      rightAnswerId: +e.target.value,
    });
  };

  inputChangeHandler = (e) => {
    this.setState({
      body: {
        ...this.state.body,
        [e.target.name]: e.target.value,
      },
    });
  };
  editorHandler = (newContent) => {
    console.log(newContent);
    this.setState({
      body: {
        ...this.state.body,
        text: newContent,
      },
    });
  };

  render() {
    const select = (
      <Select
        label="Выберите правильный ответ"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );
    return (
      <div className="container create_course_wrapper">
        <div className="row">
          <div className="col l12">
            <h2>Создай курс по шагам</h2>
          </div>
        </div>
        <div className="row">
          <div className="col l12">
            <form className="createCourse_form">
              <div className="input-field">
                <input
                  id="course_name"
                  type="text"
                  name="title"
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="course_name">Название курса</label>
              </div>
              <div className="input-field">
                <input
                  id="urlImage"
                  type="text"
                  name="urlImage"
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="urlImage">Изображение (url)</label>
              </div>
              <div className="input-field">
                <textarea
                  id="course_description"
                  className="materialize-textarea"
                  name="description"
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="course_description">Краткое описание курса</label>
              </div>
              <h3>Теория</h3>
              <div className="input-field">
                <JoditEditor
                  ref={this.editor}
                  value={this.state.body.text}
                  tabIndex={1}
                  onBlur={this.editorHandler}
                />
              </div>
              <div className="test_wrapper">
                <h1>Создание теста</h1>

                {this.renderControls()}

                {select}
                <Button type="primary" onClick={this.addQuestionHandler}>
                  Добавить вопрос
                </Button>
              </div>
              <h3>Задание</h3>
              <div className="input-field">
                <textarea
                  id="course_hw"
                  className="materialize-textarea"
                  name="homeWork"
                  onChange={this.inputChangeHandler}
                />
                <label htmlFor="course_hw">Текст задания</label>
              </div>
              <div className="input-field col s12">
                <Button type="primary" onClick={this.createQuizHandler}>
                  Создать курс
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.create.quiz,
    dataResult: state.create,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
    finishCreateCourse: (data) => dispatch(finishCreateCourse(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoursePage);
