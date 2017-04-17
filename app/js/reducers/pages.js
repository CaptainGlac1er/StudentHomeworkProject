import { SWITCH_PAGE } from 'actions/pages';

export default function pages(state = 0, action) {
  switch (action.type) {
    case SWITCH_PAGE:
      return action.payload;
    default:
      return state;
  }
}
