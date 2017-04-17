import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

class Header extends Component {
  static timer = null;

  state = {
    page: 1,
  };

  setPage(page) {
    this.setState({ page });
  }

  render() {
    return (
      <BottomNavigation selectedIndex={this.state.page}>
        <BottomNavigationItem
          label="Classes"
          icon={<FontIcon className="material-icons">schedule</FontIcon>}
          onTouchTap={() => this.setPage(0)}
        />
        <BottomNavigationItem
          label="Assignments"
          icon={<FontIcon className="material-icons">assignment</FontIcon>}
          onTouchTap={() => this.setPage(1)}
        />
        <BottomNavigationItem
          label="Archive"
          icon={<FontIcon className="material-icons">archive</FontIcon>}
          onTouchTap={() => this.setPage(2)}
        />
      </BottomNavigation>
    );
  }
}

export default Header;
