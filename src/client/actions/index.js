import axios from 'axios'

import apiUrl from '../../utils/api'
import { FETCH_USERS } from './types'

// disable eslint for now, probably adding more actions later
/* eslint-disable import/prefer-default-export */
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(`${apiUrl}/users`)

  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}
