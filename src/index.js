import express from 'express'
import renderer from './utils/renderer'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(renderer())
})

module.exports = app
