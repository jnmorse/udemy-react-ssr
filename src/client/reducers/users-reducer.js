// eslint-disable-next-line import/no-relative-parent-imports
import { FETCH_USERS } from '../actions/types';

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
