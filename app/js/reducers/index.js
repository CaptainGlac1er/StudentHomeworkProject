import { combineReducers } from 'redux';
import modal from './modal';
import assignments from './assignments';
import user from './user';
import notifications from './notifications';

export default combineReducers({
  notifications,
  modal,
  user,
  assignments,
});
