import { createStore, applyMiddleware } from 'redux'
import { matchPath } from 'react-router-dom'
import thunk from 'redux-thunk'
import axios from 'axios'

// eslint-disable-next-line import/no-relative-parent-imports
import apiUrl from '../utils/api'

// eslint-disable-next-line import/no-relative-parent-imports
import routes from '../client/routes'

export default function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: { cookie: req.get('cookie') || '' }
    })

    const store = createStore(
      reducers,
      {},
      applyMiddleware(thunk.withExtraArgument(axiosInstance))
    )

    const promises = []

    routes.forEach(route => {
      if (matchPath(req.path, route)) {
        if (route.component.loadData) {
          promises.push(route.component.loadData(store))
        }
      }
    })

    const promisesWrapper = promises.map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve)
        })
      }

      return null
    })

    Promise.all(promisesWrapper)
      .then(() => {
        req.store = store
        next()
      })
      .catch(() => next('could not get any routes'))
  }
}
