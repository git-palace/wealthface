const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    _questionId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Question' },
    answer: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Answer', AnswerSchema);