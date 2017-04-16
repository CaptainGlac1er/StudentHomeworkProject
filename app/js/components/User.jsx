import React, { Component, PropTypes } from 'react';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

class User extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
  };
  getLoginState = () => {
    if (this.props.user !== '') {
      return (
        <Chip>
          {this.props.user}
        </Chip>
      );
    }
    return (
      <FlatButton primary label="Log in" onClick={() => this.props.login('Bob Ross')} />
    );
  }
  render() {
    return (
      <div>
        {this.getLoginState()}
      </div>
    );
  }

}
export default User;
