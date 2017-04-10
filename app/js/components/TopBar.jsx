import React from 'react';
import { ToolbarGroup, Toolbar, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const TopBar = () => (
  <Toolbar style={{backgroundColor: '#64B5F6',}}>
    <ToolbarGroup className="left">
      <ToolbarTitle text="Assignment Tracker" />
    </ToolbarGroup>
    <ToolbarGroup className="right">
      <ToolbarTitle className="left" text="Monday" />
      <ToolbarTitle className="right" text="1:27" />
    </ToolbarGroup>
  </Toolbar>
);
export default TopBar;
