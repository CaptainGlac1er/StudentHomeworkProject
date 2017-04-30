import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import moment from 'moment';

class Header extends Component {
  static timer = null;

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
        iconElementLeft={<img src={'./img/icon.png'} style={{ height: '48px', width: '48px' }} alt={'Icon'} />}
        title={this.state.title}
      />
    );
  }
}

export default Header;
