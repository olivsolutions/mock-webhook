const express = require('express')

const app = express()
app.use(express.json())

app.use('*', (req, res) => {
  console.log(req.body)
  res.status(200).json({
    message: 'Chegou'
  })
})

app.listen(4000, () => console.log('ta no ar 4000'))