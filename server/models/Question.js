const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  type: { type: String, required: true, default: 'choice' },
  title: { type: String, required: true },
  options: [String],
  default: Number,
  min: Number,
  max: Number,
  step: Number,
  description: String,
  cssAttr: String,
  createdAt: { type: Date, default: () => new Date() }
})

module.exports = mongoose.model('Question', QuestionSchema)