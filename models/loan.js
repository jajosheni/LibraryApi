const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

//create a schema
const loanSchema = new Schema({
    user_id:    { type: String, required: [true, "can't be blank"]},
    book_id:    { type: String, required: [true, "can't be blank"] },
    loan_date:  { type: Date, required: [true, "can't be blank"] }
}, { versionKey: false });

loanSchema.index({ user_id: 1, book_id: 1 }, {unique: true});

// Compile model from schema
const Loan = mongoose.model('Loan', loanSchema );

module.exports = Loan;
