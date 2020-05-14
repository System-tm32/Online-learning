const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
	title: {type: String, required: true},
	text: {type: String, required: true},
	quiz: {type: Array},
	homeWork: {type: String}
});

module.exports = model('Course', schema);