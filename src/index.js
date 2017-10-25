import express from 'express'
import proxy from 'express-http-proxy'
import reactRenderer from './middleware/react-renderer'
import reduxStore from './middleware/redux-store'
import reducers from './client/reducers'

import apiUrl from './utils/api'

const app = express()

app.use('/api', proxy(`${apiUrl}`, {
  proxyReqOptDecorator(opts) {
    // eslint-disable-next-line no-param-reassign
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))

app.use(express.static('public'))

app.get('*', reduxStore(reducers), reactRenderer(), (req, res) => {
  const { html, context } = req

  if (context.url) {
    return res.redirect(302, context.url)
  } else if (context.notFound) {
    res.status(404)
  }

  return res.send(html)
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

export default app
