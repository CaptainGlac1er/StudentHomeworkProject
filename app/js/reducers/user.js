import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from 'actions/login';


export default function login(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case REGISTER_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
