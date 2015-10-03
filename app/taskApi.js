// Dependencies
var express = require('express');
var router = express.Router();

var 
    db = {},
    sequence = 0;

router.get('/', function(req, res) {
    res.json(db);
});

router.get('/:id', function(req, res) {
    var task = db[req.params.id];
    if(task) {
        res.json(task);
    }
    else {
        res.status(404).send('Not found!');
    }
});

module.exports = router;