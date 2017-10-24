import { createStore, applyMiddleware } from 'redux'
import { matchPath } from 'react-router-dom'
import thunk from 'redux-thunk'
import axios from 'axios'

import apiUrl from '../utils/api'
import routes from '../client/routes'

export default function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: { cookie: req.get('cookie') || '' }
    })

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

    const promises = []

    routes.forEach((route) => {
      if (matchPath(req.path, route)) {
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
