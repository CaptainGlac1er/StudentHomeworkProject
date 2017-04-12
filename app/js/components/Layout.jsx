import React from 'react';
import TopBar from './TopBar';
import SubBar from './SubBar';

const Layout = ({ children }) => (
  <div>
    <TopBar />
    <SubBar />
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
