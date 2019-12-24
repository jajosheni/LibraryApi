const Book = require('../models/book');

module.exports = {
    //list all Books
    list_books : async function(req, res, next) {
        res.send("List books! GET");
    },

    //create new book
    create_book : async function(req, res, next) {
        res.send('Create book! POST');
    },

    //update book info
    update_book : async function(req, res, next) {
        res.send('Update book! PUT');
    },

    //delete book
    delete_book : async function(req, res, next) {
        res.send('Delete book! Delete');
    }
};
