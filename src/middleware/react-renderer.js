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
      <script key="axios" src={clientManifest['axios.js']} />,
      <script key="react" src={clientManifest['react.js']} />,
      <script key="react-dom" src={clientManifest['react-dom.js']} />,
      <script key="react-router-dom" src={clientManifest['react-router-dom.js']} />,
      <script key="redux" src={clientManifest['redux.js']} />,
      <script key="redux-thunk" src={clientManifest['redux-thunk.js']} />,
      <script key="react-redux" src={clientManifest['react-redux.js']} />,
      <script key="bundle" src={clientManifest['bundle.js']} />
    ]

    const html = `
      <!DOCTYPE html>
      <html lang="en-US">

      <head>
        <title>React and Redux SSR</title>
      </head>

      <body>
        <div id="root">${content}</div>
        <script>
          window.initState = ${serializeJavascript(req.store.getState())}
        </script>
        ${renderToStaticMarkup(<AppScripts />)}
        <script src="/js/bundle.js"></script>
      </body>
      </html>`

    if (context.url) {
      return res.status(302).send({ Location: context.url })
    }

    req.html = html

    return next()
  }
}
