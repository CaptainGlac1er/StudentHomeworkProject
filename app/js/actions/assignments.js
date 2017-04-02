export const CREATE_ASSIGNMENT = 'CREATE_ASSIGNMENT';
export const UPDATE_ASSIGNMENT = 'UPDATE_ASSIGNMENT';
export const DESTROY_ASSIGNMENT = 'DESTROY_ASSIGNMENT';

export function createAssignment(assignment) {
  return {
    type: CREATE_ASSIGNMENT,
    payload: assignment,
  };
}

export function updateAssignment(id, assignment) {
  return {
    type: UPDATE_ASSIGNMENT,
    payload: {
      id,
      assignment,
    },
  };
}

export function destroyAssignment(id) {
  return {
    type: DESTROY_ASSIGNMENT,
    payload: id,
  };
}
