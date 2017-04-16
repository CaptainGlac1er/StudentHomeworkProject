export const CHANGE_FILTER = 'CHANGE_FILTER';

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
}
