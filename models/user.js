const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
    fullname: String,
    birthday: Date,
    admin: Boolean,
    bio: String,
    telephone: String,
    email: String
});

// Compile model from schema
const User = mongoose.model('User', userSchema );

module.exports = User;
