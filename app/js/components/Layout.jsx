import React from 'react';

const Layout = ({ children }) => (
  <div>
    <div>navbar</div>
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
