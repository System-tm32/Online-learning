const {Router} = require('express');
const Course = require('../models/course');
const config = require('config');
const router = Router();

router.post('/create-course', async (req, res) => {

	const {title} = req.body;
	console.log(req.body)
	const description = 'Бренд велосипедов, принадлежащей компании BMX Products, Inc. основанной Скипом Хессом в 1974 году в Сими-Вэлли. В первое время компания выпускала литые магниевые колеса Motomag, созданные Скипом специально для ВМХ рэйсинга. В 1976 году компания начинает производство собственных велосипедных рам под брендом Mongoose.'
	const text = 'Первый параметр в методе mongoose.model указывает на название модели. Mongoose затем будет автоматически искать в базе данных коллекцию, название которой соответствует названию модели во множественном числе. Например, в данном случае название модели "User". Во множественном числе в соответствии с правилами английского языка это "users". Поэтому при работе с данными модели User (добавлении, удалении, редактировании и получении объектов) mongoose будет обращаться к коллекции "users". Если такая коллекция есть в бд, то с ней будет идти взаимодействие. Если такой коллекции в базе данных нет, то она будет создана автоматически.Первый параметр в методе mongoose.model указывает на название модели. Mongoose затем будет автоматически искать в базе данных коллекцию, название которой соответствует названию модели во множественном числе. Например, в данном случае название модели "User". Во множественном числе в соответствии с правилами английского языка это "users". Поэтому при работе с данными модели User (добавлении, удалении, редактировании и получении объектов) mongoose будет обращаться к коллекции "users". Если такая коллекция есть в бд, то с ней будет идти взаимодействие. Если такой коллекции в базе данных нет, то она будет создана автоматически.'
	const quizes = {
		quiz1: {
			question: 'Какого цвета Солнце',
			1: 'Белого',
			2: 'Черного',
			3: 'Желтого',
			correctAnswer: 3
		},
		quiz2: {
			question: 'Какого цвета вода',
			1: 'Белого',
			2: 'Синий',
			3: 'Желтого',
			correctAnswer: 2
		}
	}
	const homeWork = 'Нарисовать Солнце и небо'
	const course = new Course({title, description, text, quizes: JSON.stringify(quizes), homeWork});
	course.save();
	res.json({ title, description, text, quizes: JSON.stringify(quizes), homeWork});
})

router.get('/course-list', async(req, res) => {
	const course = await Course.findOne({});
	res.json({ title: course.title, description: course.description, text: course.text, quizes: course.quizes, homeWork: course.homeWork});
})


module.exports = router;