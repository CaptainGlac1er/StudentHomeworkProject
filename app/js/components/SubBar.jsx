import React from 'react';
import { ToolbarGroup, Toolbar, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';

const SubBar = () => (
  <Toolbar style={{backgroundColor: '#90CAF9',}}>
    <ToolbarGroup className="left">
      <FontAwesome name="book" size="2x"/>
    </ToolbarGroup>
    <ToolbarGroup>
      <TextField hintText="Search Text" />
    </ToolbarGroup>
    <ToolbarGroup className="right">
      <RaisedButton label="Notifications" primary={true} />
      <FontAwesome name="user" size="2x"/>
    </ToolbarGroup>
  </Toolbar>
);
export default SubBar;
