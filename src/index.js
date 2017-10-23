import express from 'express'
import reactRenderer from './middleware/react-renderer'
import reduxStore from './middleware/redux-store'
import reducers from './client/reducers'

const app = express()

app.use(express.static('public'))

app.get('*', reduxStore(reducers), reactRenderer(), (req, res, next) => {
  if (req.html) {
    res.send(req.html)
  } else {
    next(0)
  }
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

module.exports = app
