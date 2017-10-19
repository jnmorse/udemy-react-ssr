import express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import Home from './client/components/Home'
import clientManifest from '../public/manifest.json'

const app = express()

const AppScripts = () => [
  <script key="react" src={clientManifest['react.js']} />,
  <script key="react-dom" src={clientManifest['react-dom.js']} />,
  <script key="bundle" src={clientManifest['bundle.js']} />
]

app.use(express.static('public'))

app.get('/', (req, res) => {
  const content = `
    <!DOCTYPE html>
    <html>

    <head>
    </head>

    <body>
      <div id="root">${renderToString(<Home />)}</div>
      ${renderToStaticMarkup(<AppScripts />)}
    </body>

    </html>
  `
  res.send(content)
})

module.exports = app
