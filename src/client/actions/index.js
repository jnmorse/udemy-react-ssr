import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_ADMINS } from './types'

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')

  return dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const { auth } = getState()

  if (auth) {
    return dispatch({
      type: FETCH_CURRENT_USER,
      payload: auth
    })
  }

  const res = await api.get('/current_user')

  return dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins')

  return dispatch({
    type: FETCH_ADMINS,
    payload: res.data
  })
}
