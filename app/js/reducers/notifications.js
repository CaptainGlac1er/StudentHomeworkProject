import { TOGGLE_NOTIFICATIONS } from 'actions/notifications';

const initState = true;

export default function notifications(state = initState, action) {
  switch (action.type) {
    case TOGGLE_NOTIFICATIONS:
      return !state;
    default:
      return initState;
  }
}
