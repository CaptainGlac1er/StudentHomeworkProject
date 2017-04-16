import { combineReducers } from 'redux';
import modal from './modal';
import assignments from './assignments';
import user from './user';

export default combineReducers({
  modal,
  user,
  assignments,
});
