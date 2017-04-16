import React from 'react';
import { ToolbarGroup, Toolbar } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import theme from 'theme';
import User from 'containers/User';
import Filter from 'containers/Filter';

const SubBar = () => (
  <Toolbar style={{ backgroundColor: theme.primary2Color }}>
    <ToolbarGroup>
      <IconButton iconClassName="fa fa-book fa-2x" />
    </ToolbarGroup>
    <ToolbarGroup>
      <Filter id="filter" name="filter" />
    </ToolbarGroup>
    <ToolbarGroup>
      <User />
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
