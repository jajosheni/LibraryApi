const express = require('express');
const router = express.Router();

const userC = require('../controllers/userController');

/* users routing. */
router
    .get('/', userC.list_users)
    .post('/', userC.create_user)
    .get('/:user_id', userC.get_user)
    .put('/:user_id', userC.update_user)
    .delete('/:user_id', userC.delete_user);

module.exports = router;
