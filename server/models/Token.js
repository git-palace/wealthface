const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    created_at: {type: Date}
})