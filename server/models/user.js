const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unqiue: true },
    email_confirmed: { type: Boolean, default: false },
    password_hash: { type: String, required: true },
    not_us_tax: { type: Boolean, default: false },
    created: { type: Date, default: () => new Date() }
});

UserSchema.methods = {
    generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    validPassword: function(password) {
        return bcrypt.compareSync(password, this.password_hash);
    },

    createToken: function() {
        return jwt.sign(this.toObject(), 'token');
    }
}

module.exports = mongoose.model('User', UserSchema)