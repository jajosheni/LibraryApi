const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const bookSchema = new Schema({
    name: String,
    author: String,
    type: String,
    quantity: Number,
    reads: Number
});

// Compile model from schema
const Book = mongoose.model('Book', bookSchema );

module.exports = Book;
