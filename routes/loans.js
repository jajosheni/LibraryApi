var express = require('express');
var router = express.Router();

/* GET loans listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a loan resource');
});

module.exports = router;
