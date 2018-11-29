// Dependencies
var express = require('express')
var router = express.Router()

var db = {},
  sequence = 0

var notFound = function(res) {
  res.status(404).send('Not found!')
}

router.get('/', function(req, res) {
  res.json(db)
})

router.get('/:id', function(req, res) {
  var task = db[req.params.id]
  if (task) {
    res.json(task)
  } else {
    notFound(res)
  }
})

router.post('/', function(req, res) {
  var newTask = {
    id: ++sequence,
    done: req.body.done || false,
    description: req.body.description
  }

  db[newTask.id] = newTask

  res.status(201).json(newTask)
})

router.put('/:id', function(req, res) {
  var task = db[req.params.id]
  if (task) {
    task.done = req.body.done != null ? req.body.done : false
    task.description = req.body.description || task.description
    res.json(task)
  } else {
    notFound(res)
  }
})

router.delete('/:id', function(req, res) {
  var task = db[req.params.id]
  if (task) {
    delete db[req.params.id]
    res.send('Task deleted')
  } else {
    notFound(res)
  }
})

module.exports = router
