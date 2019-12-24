const express = require('express');
const router = express.Router();

const userC = require('../controllers/userController');

/* users routing. */
router
    .get('/', userC.list_users)
    .get('/:user_id', userC.get_user)
    .post('/', userC.create_user)
    .put('/:user_id', userC.update_user);

module.exports = router;
