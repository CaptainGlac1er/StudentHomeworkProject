export const SWITCH_PAGE = 'SWITCH_PAGE';

export const ASSIGNMENT_PAGE = 0;
export const ARCHIVE_PAGE = 1;

export function switchPage(page) {
  return {
    type: SWITCH_PAGE,
    payload: page,
  };
}
