import React from 'react';
import { ToolbarGroup, Toolbar, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const SubBar = () => (
  <Toolbar>
    <ToolbarGroup className="left">
      <ToolbarTitle  className="left" text="Assignment Tracker" />
    </ToolbarGroup>
    <ToolbarGroup>
      <TextField hintText="Search Text" />
    </ToolbarGroup>
    <ToolbarGroup className="right">
      <RaisedButton label="Notifications" primary={true}/>
      <ToolbarSeparator classname="center" />
      <img className="right" alt="user avatar" />
    </ToolbarGroup>
  </Toolbar>
);
export default SubBar;
