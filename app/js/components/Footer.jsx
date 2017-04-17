import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

class Header extends Component {
  static timer = null;

  state = {
    page: 0,
  };

  setPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <BottomNavigation selectedIndex={this.state.page}>
        <BottomNavigationItem
          label="Assignments"
          icon={<FontIcon className="material-icons">assignment</FontIcon>}
          onTouchTap={() => this.setPage(0)}
        />
        <BottomNavigationItem
          label="Archive"
          icon={<FontIcon className="material-icons">archive</FontIcon>}
          onTouchTap={() => this.setPage(1)}
        />
      </BottomNavigation>
    );
  }
}

export default Header;
