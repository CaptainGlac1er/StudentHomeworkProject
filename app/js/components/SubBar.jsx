import React from 'react';
import theme from 'theme';
import Filter from 'containers/Filter';
import { ToolbarGroup, Toolbar } from 'material-ui/Toolbar';
import Notifications from 'containers/NotificationsIconContainer';

const SubBar = () => (
  <Toolbar style={{ backgroundColor: theme.primary2Color }}>
    <ToolbarGroup>
      <label htmlFor="filter">
        <i className="fa fa-search" style={{ marginRight: '5px' }} />
      </label>
      <Filter id="filter" name="filter" />
    </ToolbarGroup>
    <ToolbarGroup>
      <Notifications />
    </ToolbarGroup>
  </Toolbar>
);

export default SubBar;
