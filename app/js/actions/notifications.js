export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';

export function toggleNotifications(active) {
  return {
    type: TOGGLE_NOTIFICATIONS,
    active,
  };
}
