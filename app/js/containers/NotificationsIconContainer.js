import { connect } from 'react-redux';
import NotificationsIcon from 'components/NotificationsIcon';
import { toggleNotifications } from 'actions/notifications';

function mapStateToProps(store) {
  return {
    notifications: store.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => dispatch(toggleNotifications()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsIcon);
