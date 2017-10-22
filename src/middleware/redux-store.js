import { createStore, applyMiddleware } from 'redux'
import { matchRoutes } from 'react-router-config'
import thunk from 'redux-thunk'

import Routes from '../client/Routes'

export default function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      if (!route.loadData) {
        return null
      }

      return route.loadData(store)
    })

    Promise.all(promises)
      .then(() => {
        req.store = store
        next()
      })
      .catch(() => next('could not get any routes'))
  }
}
