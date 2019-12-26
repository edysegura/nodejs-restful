const express = require('express')
const router = express.Router()

const TaskService = require('./TaskService')

const notFound = response => {
  response.status(404).send('Not found!')
}

router.get('/', async (request, response) => {
  const tasks = await TaskService.getAll()
  tasks && tasks.length
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
  const task = await TaskService.add(request.body)
  response
    .status(201)
    .json(task)
})

router.patch('/:id', async (request, response) => {
  const updatedTask = await TaskService.update(
    request.params.id,
    request.body
  );
  updatedTask
    ? response.json(updatedTask)
    : notFound(response);
})

router.delete('/:id', async (request, response) => {
  const isDeleted = await TaskService.delete(request.params.id);
  isDeleted
    ? response.end('Task deleted!')
    : notFound(response)
})

module.exports = router
