const Loan = require('../models/loan');

module.exports = {
    //list all loans or filter by query
    list_loans : async function(req, res, next) {
        res.send("List loans! GET");
    },

    //create new loan
    create_loan : async function(req, res, next) {
        res.send('Create loan! POST');
    },

    //delete loan by user_id + book_id
    delete_loan : async function(req, res, next) {
        res.send('Delete loan! DELETE ');
    }
};
