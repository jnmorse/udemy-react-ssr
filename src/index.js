import express from 'express'
import reactRenderer from './utils/react-renderer'

const app = express()

app.use(express.static('public'))

app.get('*', reactRenderer(), (req, res) => {
  res.send(req.html)
})

module.exports = app
