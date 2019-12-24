const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const loanSchema = new Schema({
    user_id: String,
    book_id: String
});

// Compile model from schema
const Loan = mongoose.model('Loan', loanSchema );

module.exports = Loan;
