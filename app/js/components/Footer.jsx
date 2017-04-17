import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { ASSIGNMENT_PAGE, ARCHIVE_PAGE } from 'actions/pages';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const Footer = ({
  page,
  setPage,
}) => (
  <BottomNavigation selectedIndex={page}>
    <BottomNavigationItem
      label="Assignments"
      icon={<FontIcon className="material-icons">assignment</FontIcon>}
      onTouchTap={() => setPage(ASSIGNMENT_PAGE)}
    />
    <BottomNavigationItem
      label="Archive"
      icon={<FontIcon className="material-icons">archive</FontIcon>}
      onTouchTap={() => setPage(ARCHIVE_PAGE)}
    />
  </BottomNavigation>
);

Footer.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Footer;
