const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.redirect('./index.html')
})

app.use('/api/tasks', require('./app/taskApi'))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
