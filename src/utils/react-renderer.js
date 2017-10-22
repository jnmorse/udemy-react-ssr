import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'
import clientManifest from '../../public/manifest.json'

const AppScripts = () => [
  <script key="react" src={clientManifest['react.js']} />,
  <script key="react-dom" src={clientManifest['react-dom.js']} />,
  <script key="react-router-dom" src={clientManifest['react-router-dom.js']} />,
  <script key="bundle" src={clientManifest['bundle.js']} />
]

export default function reactRenderer() {
  return function renderer(req, res, next) {
    const context = {}

    const content = renderToString(
      <StaticRouter location={req.path} context={context}>
        <Routes />
      </StaticRouter>
    )

    const scripts = renderToStaticMarkup(<AppScripts />)

    const html = `<!DOCTYPE html><html lang="en-US"><head></head><body><div id="root">${content}</div>${scripts}</body></html>`

    if (context.url) {
      return res.status(302).send({ Location: context.url })
    }

    req.html = html

    return next()
  }
}
