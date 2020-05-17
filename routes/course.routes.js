const {Router} = require('express');
const Course = require('../models/course');
const config = require('config');
const router = Router();

router.post('/create-course', async (req, res) => {

	const {title, description, text, question, answer1, answer2, answer3, answer4, correctAnswer, homeWork, urlImage} = req.body;
	console.log(title,description,text);
	const quizes = {
		quiz1: {
			question: question,
			1: answer1,
			2: answer2,
			3: answer3,
			4: answer4,
			correctAnswer: correctAnswer
		}
	}
	const course = new Course({title, description, text, quizes: JSON.stringify(quizes), homeWork, urlImage});
	course.save();
})

router.get('/course-list', async(req, res) => {
	const course = await Course.find({},'_id title  description urlImage');
	res.send(course);
	//res.json({ id: course._id, title: course.title, description: course.description, text: course.text, quizes: course.quizes, homeWork: course.homeWork, urlImage: course.urlImage});
})

router.get('/singleCourse/:id', async(req, res) => {
	const { id } = req.params;
	const course = await Course.findOne({_id: id},'_id title  text quizes homeWork urlImage description');
	res.send([course]);
	
})


module.exports = router;