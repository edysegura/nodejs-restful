// Dependencies
const express = require('express')
const bodyParser = require('body-parser')

// Express configuration
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

// Welcome
app.get('/', (request, response) => {
  response.redirect('./index.html')
})

// Task API
app.use('/api/tasks', require('./app/taskApi'))

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080')
})
