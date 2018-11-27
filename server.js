const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.redirect('./index.html')
})

app.use('/api/tasks', require('./app/taskApi'))

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080')
})
