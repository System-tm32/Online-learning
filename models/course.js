const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	text: {type: String, required: true},
	urlImage: {type: String, required: true},
	quizes: {type: String},
	homeWork: String
});

module.exports = model('Course', schema);