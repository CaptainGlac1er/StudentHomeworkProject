import { SHOW_MODAL, HIDE_MODAL } from 'actions/modal';

const initState = {
  modalType: null,
  id: null,
};

export default function modal(state = initState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return initState;
    default:
      return state;
  }
}
