const Loan = require('../models/loan');
const Book = require('../models/book');
const User = require('../models/user');

module.exports = {
    //list all loans or filter by query
    list_loans : async function(req, res, next) {
        let loans = await Loan.find( req.query, { user_id: 1, book_id: 1, loan_date: 1, _id: 0 } , function(err, ln) {
            if (err) {
                res.send(err);
                console.log(err);
            } else
                return ln;
        }).sort({loan_date:-1});

        res.send(loans);
    },

    //create new loan
    create_loan : async function(req, res, next) {

        await User.findById(req.body.user_id, function (err, usr) {
            if (err)
                res.send(err);
        });

        await Book.findById(req.body.book_id, function (err, bk) {
            if (err)
                res.send(err);
        });


        let newLoan;

        try{
            // loan model
            newLoan = Loan({
                user_id:  req.body.user_id ,
                book_id: req.body.book_id ,
                loan_date: req.body.loan_date
            });
        }catch (e) {
            res.send(e);
        }

        newLoan.save(function(err) {
            if (err)
                res.send(err);
            else
                res.send('true');
        });
    },

    //delete loan by user_id + book_id
    delete_loan : async function(req, res, next) {
        Loan.deleteOne({
            book_id: req.query.book_id,
            user_id: req.query.user_id
        }, function (err, loan){
            if (err)
                res.send(err);
            else if(loan['deletedCount'] !== 0)
                res.send('Loan was deleted.');
            else
                res.send('No such loan.')
        });
    }
};
