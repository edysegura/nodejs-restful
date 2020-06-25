const express = require('express')
const bodyParser = require('body-parser')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (_, response) => {
  response.redirect('./index.html')
})

app.use('/api/tasks', require('./app/taskApi'))

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})
