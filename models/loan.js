const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const loanSchema = new Schema({
    user_id:    { type: String, required: true },
    book_id:    { type: String, required: true },
    loan_date:  { type: Date, required: true }
}, { versionKey: false });

// Compile model from schema
const Loan = mongoose.model('Loan', loanSchema );

module.exports = Loan;
