import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const store = createStore(reducers, {}, applyMiddleware(thunk))
    req.store = store

    next()
  }
}
