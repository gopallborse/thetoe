const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Gopall is just terrific...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})