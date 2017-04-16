import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import filter from './filter';
import assignments from './assignments';

export default combineReducers({
  user,
  modal,
  filter,
  assignments,
});
