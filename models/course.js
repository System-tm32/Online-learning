const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  text: { type: String, required: true },
  urlImage: { type: String, required: true },
  quizes: { type: String },
  homeWork: String,
  learner: [{ type: Types.ObjectId, ref: 'User' }],
});

module.exports = model('Course', schema);
