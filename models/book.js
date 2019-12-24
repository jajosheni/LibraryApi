const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const bookSchema = new Schema({
    name:       { type: String, required: true },
    author:     { type: String, required: true },
    type:       { type: String, default: "Unknown" },
    quantity:   { type: Number, required: true },
    reads:      { type: Number, default: 0 }
}, { versionKey: false });

// Compile model from schema
const Book = mongoose.model('Book', bookSchema );

module.exports = Book;
