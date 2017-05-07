export const UPDATE = 'UPDATE';

export function updateMessage(snackbarMessage) {
  return {
    type: UPDATE,
    payload: snackbarMessage,
  };
}
