import { createStore, applyMiddleware } from 'redux'
import { matchPath } from 'react-router-dom'
import thunk from 'redux-thunk'

import routes from '../client/routes'

export default function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    const promises = []

    routes.forEach((route, path) => {
      const thisRoute = { ...route, path }

      if (matchPath(req.path, thisRoute)) {
        if (route.loadData) {
          promises.push(route.loadData(store))
        }
      }
    })

    Promise.all(promises)
      .then(() => {
        req.store = store
        next()
      })
      .catch(() => next('could not get any routes'))
  }
}
