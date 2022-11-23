const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/plan', (req, res) => {
  const { code, amount } = req.body

  if (!code || !amount || isNaN(amount) || amount < 0) {
    return res.status(400).json({ error: 'invalid fields' })
  }

  // publish pub/sub message
  // topic: projects/ivory-mountain-369501/topics/trigger-save-plan

  res.send({ message: 'plan created successfully' })
})

app.listen(3000, () => {
  console.log('app listening on port 3000')
})
