export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const ASSIGNMENT_MODAL = 'ASSIGNMENT_MODAL';

function showModal(modalType) {
  return (id = null) => {
    return {
      type: SHOW_MODAL,
      payload: {
        id,
        modalType,
      },
    };
  };
}

export const showAssignmentModal = showModal(ASSIGNMENT_MODAL);

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
