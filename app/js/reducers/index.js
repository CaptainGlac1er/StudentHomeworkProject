import { combineReducers } from 'redux';
import modal from './modal';
import assignments from './assignments';

export default combineReducers({
  modal,
  assignments,
});
