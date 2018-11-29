// Dependencies
const express = require('express')
const router = express.Router()

let db = {}
let sequence = 0

const notFound = response => {
  response.status(404).send('Not found!')
}

router.get('/', (request, response) => {
  response.json(db)
})

router.get('/:id', (request, response) => {
  const task = db[request.params.id]
  task
    ? response.json(task)
    : notFound(response)
})

router.post('/', (request, response) => {
  const newTask = {
    'id': ++sequence,
    'done': request.body.done || false,
    'description': request.body.description
  }

  db[newTask.id] = newTask

  response.status(201).json(newTask)
})

router.put('/:id', (request, response) => {
  const task = db[request.params.id]
  if (task) {
    task.done = request.body.done != null ? request.body.done : false
    task.description = request.body.description || task.description
    response.json(task)
  } else {
    notFound(response)
  }
})

router.delete('/:id', (request, response) => {
  var task = db[request.params.id]
  if (task) {
    delete db[request.params.id]
    response.send('Task deleted')
  } else {
    notFound(response)
  }
})

module.exports = router
