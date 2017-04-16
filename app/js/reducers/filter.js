import { CHANGE_FILTER } from 'actions/filter';

export default function filter(state = '', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
