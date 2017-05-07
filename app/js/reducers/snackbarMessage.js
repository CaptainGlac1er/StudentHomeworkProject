import {
  UPDATE,
} from 'actions/snackbarMessage';


export default function update(state = null, action) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}
