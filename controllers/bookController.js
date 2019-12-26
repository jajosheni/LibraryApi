const Book = require('../models/book');

module.exports = {
    //list Books
    list_books : async function(req, res, next) {
        let books = await Book.find( req.query , function(err, bks) {
            if (err) {
                res.send(err);
                console.log(err);
            } else
                return bks;
        }).sort({name:-1});

        res.send(books);
    },

    get_book : async function(req, res, next) {

        let book = await Book.findById(req.params.book_id, function (err, bk) {
            if (err) {
                res.send(err);
                console.log(err);
            } else
                return bk;
        });

        res.send(book);
    },

    //create new book
    create_book : async function(req, res, next) {
        let newBook;

        try{
            // book model
            newBook = Book({
                name:  req.body.name ,
                author: req.body.author ,
                type: req.body.type || 'Unknown',
                quantity: req.body.quantity || 1,
                reads: req.body.reads || 0
            });
        }catch (e) {
            res.send(e);
        }

        newBook.save(function(err) {
            if (err)
                res.send(err);
            else
                res.send('true');
        });
    },

    //update book info
    update_book : async function(req, res, next) {
        Book.findByIdAndUpdate(
            req.params.book_id,
            req.body,
            function(err, book) {
                if (err)
                    res.send(err);
                else if (book === null)
                    res.send('Book doesn\'t exist');
                else
                    res.send('Book Updated');

                console.log('Book Updated');
            });
    },

    //delete book
    delete_book : async function(req, res, next) {
        Book.findOneAndDelete( req.params.book_id, function (err){
            if (err)
                res.send(err);
            else
                res.send('Book was deleted.');
        });
    }
};
