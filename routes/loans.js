const express = require('express');
const router = express.Router();

const loanC = require('../controllers/loanController');

/* loans routing. */
router
    .get('/', loanC.list_loans)
    .post('/', loanC.create_loan)
    .delete('/', loanC.delete_loan);

module.exports = router;
