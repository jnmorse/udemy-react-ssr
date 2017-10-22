import express from 'express'
import reactRenderer from './middleware/react-renderer'
import reduxStore from './middleware/redux-store'
import reducers from './client/reducers'

const app = express()

app.use(express.static('public'))

app.use(reduxStore(reducers))

app.get('*', reactRenderer(), (req, res) => {
  res.send(req.html)
})

module.exports = app
