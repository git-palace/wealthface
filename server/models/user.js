const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unqiue: true },
    isVerified: { type: Boolean, default: false },
    passwordHash: { type: String, required: true },
    notUSTax: { type: Boolean, default: false },
    createdAt: { type: Date, default: () => new Date() }
});

UserSchema.methods = {
    generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    validPassword: function (password) {
        return bcrypt.compareSync(password, this.passwordHash);
    },

    createToken: function () {
        return jwt.sign(this.toObject(), 'token');
    }
}

UserSchema.statics = {
    parseToken: function (token) {
        return jwt.decode(token, 'token');
    }
}

module.exports = mongoose.model('User', UserSchema)