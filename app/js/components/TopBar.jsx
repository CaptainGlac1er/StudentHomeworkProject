import React, { Component } from 'react';
import { ToolbarGroup, Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import moment from 'moment';
import theme from 'theme';

class TopBar extends Component {
  static timer = null;

  state = {
    day: moment().format('dddd'),
    time: moment().format('hh:mm a'),
  };

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  updateTime = () => {
    this.timer = setTimeout(() => {
      this.setState({
        day: moment().format('dddd'),
        time: moment().format('hh:mm a'),
      });
      this.updateTime();
    }, 500);
  }

  render() {
    return (
      <Toolbar style={{ backgroundColor: theme.primary1Color }}>
        <ToolbarGroup className="left">
          <ToolbarTitle text="Assignment Tracker" />
        </ToolbarGroup>
        <ToolbarGroup className="right">
          <ToolbarTitle className="left" text={this.state.day} />
          <ToolbarTitle className="right" text={this.state.time} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TopBar;
