const express = require('express');
const router = express.Router();

const bookC = require('../controllers/bookController');

/* books routing. */
router
    .get('/', bookC.list_books)
    .post('/', bookC.create_book)
    .put('/', bookC.update_book)
    .delete('/', bookC.delete_book);

module.exports = router;
