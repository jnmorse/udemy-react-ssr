import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})

export default function reduxStore(initState) {
  return createStore(
    reducers,
    initState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}
