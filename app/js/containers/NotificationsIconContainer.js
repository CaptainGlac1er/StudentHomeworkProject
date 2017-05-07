import { connect } from 'react-redux';
import NotificationsIcon from 'components/NotificationsIcon';
import { toggleNotifications } from 'actions/notifications';
import { updateMessage } from 'actions/snackbarMessage';

function mapStateToProps(store) {
  return {
    notifications: store.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: () => dispatch(toggleNotifications()),
    snackbarMessageEdit: message => dispatch(updateMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsIcon);
