import { connect } from 'react-redux';
import NotificationsIcon from 'components/NotificationsIcon';
import { toggleNotifications } from 'actions/notifications';

function mapStateToProps(store) {
  return {
    notifications: store.notifications || true,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: id => dispatch(toggleNotifications(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsIcon);
