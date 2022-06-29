const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to MailZapp!')
})

app.listen(5000, () => {
  console.log('Server running on PORT : 5000.')
})
