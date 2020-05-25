import React, {useEffect} from 'react'
import './coursePage.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCourseList} from '../../store/actions/courseAction'
const CoursePage = (props) => {
	const {getCourseList} = props;
	useEffect(() =>{
		getCourseList();
	}, [getCourseList]);
	return (
		<div className="container course_block">
			<div className="row">
				{props.courses.map(course => {
					return(
					<div className="col s4" key={course._id}>
					  <div className="card">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src={course.urlImage} alt="diplom"/>
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">{course.title}<i className="material-icons right">more_vert</i></span>
					      <div className="button_wrapper">
					      	<Link to={`/course/singleCourse/${course._id}`} className="button success">Начать</Link>
					      </div>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4">Курс - {course.title}<i className="material-icons right">close</i></span>
					      <p>{course.description}</p>
					    </div>
					  </div>
				</div>
					)
				})}

			</div>
		</div>
	)
}

const mapStateToProps = (state) => {

	return {
		courses: state.course
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getCourseList: () => dispatch(getCourseList())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);