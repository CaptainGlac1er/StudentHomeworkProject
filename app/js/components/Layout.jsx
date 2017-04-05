import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const Layout = ({ children }) => (
  <div>
    <AppBar
      title="Assignment Tracker"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Drawer open={this.state.open}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
    <div>navbar</div>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
