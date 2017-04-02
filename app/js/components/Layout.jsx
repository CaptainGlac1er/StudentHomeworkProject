import React from 'react';
import AppBar from 'material-ui/AppBar';
const Layout = ({ children }) => (
  <div>
    <AppBar 
	title="Title"
    	iconClassNameRight="muidocs-icon-navigation-expand-more"
     />
    <div>navbar</div>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
