const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the user model
const userSchema = new Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('user', userSchema);