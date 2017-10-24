import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import serializeJavascript from 'serialize-javascript'
import clientManifest from '../../public/manifest.json'
import App from '../client/App'

export default function reactRenderer() {
  return function renderer(req, res, next) {
    const context = {}

    /* eslint-disable function-paren-newline */
    const content = renderToString(
      <Provider store={req.store}>
        <Router location={req.path} context={context}>
          <App />
        </Router>
      </Provider>
    )
    /* eslint-enable function-paren-newline */

    const AppScripts = () => [
      <script src={clientManifest['axios.js']} />,
      <script src={clientManifest['object-assign.js']} />,
      <script src={clientManifest['react.js']} />,
      <script src={clientManifest['react-dom.js']} />,
      <script src={clientManifest['react-router-dom.js']} />,
      <script src={clientManifest['redux.js']} />,
      <script src={clientManifest['redux-thunk.js']} />,
      <script src={clientManifest['react-redux.js']} />,
      <script src={`/${clientManifest['bundle.js']}`} />
    ]

    const html = `
      <!DOCTYPE html>
      <html lang="en-US">

      <head>
        <title>React and Redux SSR</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>

      <body>
        <div id="root">${content}</div>
        <script>
          window.initState = ${serializeJavascript(req.store.getState())}
        </script>
        ${renderToStaticMarkup(<AppScripts />)}
      </body>
      </html>`

    req.context = context
    req.html = html

    return next()
  }
}
