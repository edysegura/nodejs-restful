// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express configuration
var app = express();

//welcome
app.get('/', function(req, res) {
    res.send('Hi there!');
});

app.get('/api/tasks', function(req, res) {
    var task = {
        id: 1,
        done: false,
        description: 'Learn NodeJS'
    };
    res.json(task);
});

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
});