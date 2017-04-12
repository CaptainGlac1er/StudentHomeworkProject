import React from 'react';
import { ToolbarGroup, Toolbar } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import theme from 'theme';

const SubBar = () => (
  <Toolbar style={{ backgroundColor: theme.primary2Color }}>
    <ToolbarGroup>
      <IconButton iconClassName="fa fa-book fa-2x" />
    </ToolbarGroup>
    <ToolbarGroup>
      <TextField hintText="Search Text" />
    </ToolbarGroup>
    <ToolbarGroup>
      <IconMenu
        iconButtonElement={<IconButton iconClassName="fa fa-user fa-2x" />}
      >
        <MenuItem>Notifications</MenuItem>
        <MenuItem>User Settings</MenuItem>
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>
);

export default SubBar;
