const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
    username:   { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password:   { type: String, required: [true, "can't be blank"], select: false },
    fullname:   { type: String, required: [true, "can't be blank"] , match: [/^[a-zA-Z0-9 ]+$/, 'is invalid'] },
    birthday:   { type: Date, default: Date.now() },
    admin:      { type: Boolean, default: false, select: false },
    bio:        { type: String, default: "Nothing to see here..." },
    telephone:  { type: String, required: [true, "can't be blank"], unique: true },
    email:      { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'] }
}, { versionKey: false });

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// Compile model from schema
const User = mongoose.model('User', userSchema );

module.exports = User;
