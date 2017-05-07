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
        iconElementLeft={<i className="fa fa-2x fa-book" style={{ marginTop: '7.5px' }} aria-hidden="true" />}
        title={this.state.title}
      />
    );
  }
}

export default Header;
