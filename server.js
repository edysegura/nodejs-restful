// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express configuration
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

//welcome
app.get('/', function(req, res) {
    res.redirect('./index.html');
});

// Task API
app.use('/api/tasks', require('./app/taskApi'));

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
});