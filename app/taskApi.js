const express = require('express')
const router = express.Router()

const TaskService = require('./TaskService')

const notFound = response => {
  response.status(404).send('Not found!')
}

router.get('/', async (request, response) => {
  const tasks = await TaskService.getAll()
  tasks.length
    ? response.json(tasks)
    : response.status(204).end('')
})

router.get('/:id', async (request, response) => {
  const taskId = request.params.id
  const task = await TaskService.getById(taskId)
  task
    ? response.json(task)
    : notFound(response)
})

router.post('/', async (request, response) => {
  const newTask = {
    'done': request.body.done || false,
    'description': request.body.description
  }

  const savedTask = await TaskService.save(newTask)

  response.status(201).json(savedTask)
})

router.patch('/:id', async (request, response) => {
  const task = await TaskService.getById(request.params.id)
  if (task) {
    task.done = request.body.done != null ? request.body.done : false
    task.description = request.body.description || task.description
    response.json(task)
  } else {
    notFound(response)
  }
})

router.delete('/:id', async (request, response) => {
  const isDeleted = await TaskService.delete(request.params.id)
  if (isDeleted) {
    response
      .status(200)
      .send('Task deleted')
  } else {
    notFound(response)
  }
})

module.exports = router
