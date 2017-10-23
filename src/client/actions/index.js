import { FETCH_USERS } from './types'

// disable eslint for now, probably adding more actions later
/* eslint-disable import/prefer-default-export */
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}
