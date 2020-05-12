const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
	name: {type: String, required: true},
	admin: {type: Boolean},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	course: [{type: Types.ObjectId, ref: 'Course'}]
});

module.exports = model('User', schema);