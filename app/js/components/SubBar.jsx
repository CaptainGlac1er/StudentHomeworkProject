import React from 'react';
import { ToolbarGroup, Toolbar } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SubBar = () => (
  <Toolbar style={{ backgroundColor: '#90CAF9' }}>
    <ToolbarGroup className="left">
      <i className="fa fa-book fa-2x" />
    </ToolbarGroup>
    <ToolbarGroup>
      <TextField hintText="Search Text" />
    </ToolbarGroup>
    <ToolbarGroup className="right">
      <RaisedButton label="Notifications" primary />
      <i className="fa fa-user fa-2x" />
    </ToolbarGroup>
  </Toolbar>
);

export default SubBar;
