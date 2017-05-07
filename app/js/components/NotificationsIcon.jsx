import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import 'css/app.css';

class NotificationsIcon extends Component {
  static propTypes = {
    notifications: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    snackbarMessageEdit: PropTypes.func.isRequired,
  };


  toggleNotification = () => {
    this.props.snackbarMessageEdit(`Notifications ${(this.props.notifications) ? 'on' : 'off'}`);
    this.props.toggle();
  }

  renderNotificationsIcon = () => {
    return (
      <IconButton iconClassName={this.props.notifications ? 'fa fa-bell-o' : 'fa fa-bell-slash-o'} onClick={this.toggleNotification} />
    );
  }

  render() {
    return this.renderNotificationsIcon();
  }
}

export default NotificationsIcon;
