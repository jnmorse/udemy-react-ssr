import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Home from '../client/components/Home'
import clientManifest from '../../public/manifest.json'

const AppScripts = () => [
  <script key="react" src={clientManifest['react.js']} />,
  <script key="react-dom" src={clientManifest['react-dom.js']} />,
  <script key="bundle" src={clientManifest['bundle.js']} />
]

export default () => {
  const content = renderToString(<Home />)
  const scripts = renderToStaticMarkup(<AppScripts />)

  return`<!DOCTYPE html><html lang="en-US"><head></head><body><div id="root">${content}</div>${scripts}</body></html>`
}
