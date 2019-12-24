const express = require('express');
const router = express.Router();

const userC = require('../controllers/userController');

/* users routing. */
router
    .get('/', userC.list_users)
    .post('/', userC.create_user)
    .post('/login', userC.login_user)
    .get('/:username', userC.get_user)
    .put('/:username', userC.update_user)
    .delete('/:username', userC.delete_user);

module.exports = router;
