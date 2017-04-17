import IconButton from 'material-ui/IconButton';
import 'css/app.css';

import React, { Component, PropTypes } from 'react';

class NotificationsIcon extends Component {
  static propTypes = {
    notifications: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  };

  renderNotificationsIcon = () => {
    return (
      <IconButton iconClassName={this.props.toggle(this.props.notifications) ? 'fa fa-bell-o' : 'fa fa-bell-slash-o'} onClick={() => this.props.toggle(this.props.notifications)} />
    );
  }
  render() {
    return (
      <div>
        {this.renderNotificationsIcon()}
      </div>
    );
  }

}
export default NotificationsIcon;
