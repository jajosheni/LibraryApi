const express = require('express');
const router = express.Router();

const bookC = require('../controllers/bookController');

/* books routing. */
router
    .get('/', bookC.list_books)
    .post('/', bookC.create_book)
    .get('/:book_id', bookC.get_book)
    .put('/:book_id', bookC.update_book)
    .delete('/:book_id', bookC.delete_book);

module.exports = router;
