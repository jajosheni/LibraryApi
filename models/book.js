const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const bookSchema = new Schema({
    name:       { type: String, required: [true, "can't be blank"] },
    author:     { type: String, required: [true, "can't be blank"] },
    type:       { type: String, default: "Unknown" },
    quantity:   { type: Number, default: 1 },
    reads:      { type: Number, default: 0 }
}, { versionKey: false });

bookSchema.index({ name: 1, author: 1, type: 1 }, {unique:true});

// Compile model from schema
const Book = mongoose.model('Book', bookSchema );

module.exports = Book;
