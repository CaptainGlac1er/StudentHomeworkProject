import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import moment from 'moment';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Header extends Component {
  static timer = null;

  static propTypes = {
    logout: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  updateTime() {
    this.setState({
      title: moment().format('ddd, M/D, h:mma'),
    });
    this.timer = setTimeout(() => {
      this.updateTime();
    }, 1000);
  }

  render() {
    return (
      <AppBar
        iconElementLeft={<i className="fa fa-2x fa-book" style={{ marginTop: '7.5px' }} aria-hidden="true" />}
        title={this.state.title}
        iconElementRight={<IconMenu
          iconButtonElement={
            <FontIcon className="fa fa-2x fa-user" style={{ marginTop: '7.5px' }} aria-hidden="true" />
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem primaryText="Sign out" onClick={this.props.logout} />
        </IconMenu>}
      />
    );
  }
}

export default Header;
