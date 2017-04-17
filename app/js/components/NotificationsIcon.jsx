import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import 'css/app.css';

class NotificationsIcon extends Component {
  static propTypes = {
    notifications: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  renderNotificationsIcon = () => {
    return (
      <IconButton iconClassName={this.props.notifications ? 'fa fa-bell-o' : 'fa fa-bell-slash-o'} onClick={this.props.toggle} />
    );
  }

  render() {
    return this.renderNotificationsIcon();
  }
}

export default NotificationsIcon;
