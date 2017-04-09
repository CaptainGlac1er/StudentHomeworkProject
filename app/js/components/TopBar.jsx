import React from 'react';
import { ToolbarGroup, Toolbar, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const TopBar = () => (
  <Toolbar>
    <ToolbarGroup className="left">
      <img className="left" alt="Assignment Tracker" />
    </ToolbarGroup>
    <ToolbarGroup className="right">
      <ToolbarTitle className="left" text="Monday"/>
      <ToolbarSeparator className="center" />
      <ToolbarTitle className="right" text="1:27"/>
    </ToolbarGroup>
  </Toolbar>
);
export default TopBar;
