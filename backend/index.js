const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Gopall is just terrific...')
})

app.use('/', express.static(__dirname + '/'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})