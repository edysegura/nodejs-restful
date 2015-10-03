// Dependencies
var express = require('express');
var router = express.Router();

var 
    db = {},
    sequence = 0;

router.get('/', function(req, res) {
    res.json(db);
});

module.exports = router;