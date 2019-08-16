// eslint-disable-next-line import/no-relative-parent-imports
import { FETCH_ADMINS } from '../actions/types';

export default function adminsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ADMINS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
