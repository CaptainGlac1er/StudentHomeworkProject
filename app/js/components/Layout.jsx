import React from 'react';
import Header from './Header';
import TopBar from './TopBar';
import SubBar from './SubBar';

const Layout = ({ children }) => (
  <div>
    <Header />

    {/*TODO Remove TopBar & SubBar (Replaced by Header)*/}
    <TopBar />
    <SubBar />

    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
