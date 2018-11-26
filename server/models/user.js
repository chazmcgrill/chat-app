const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define the user model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// before saving model encrypt password
userSchema.pre('save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, null, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    })
});

module.exports = mongoose.model('user', userSchema);