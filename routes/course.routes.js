const {Router} = require('express');
const Course = require('../models/course');
const config = require('config');
const router = Router();

router.post('/create-course', async (req, res) => {
	const {body, quizes} = req.body;
	const {title, description, text, homeWork, urlImage} = body;
	const course = new Course({title, description, text, quizes: JSON.stringify(quizes), homeWork, urlImage});
	course.save();
	res.json({message: 'Курс создан успешно'})
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