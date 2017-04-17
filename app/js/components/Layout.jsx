import React from 'react';
import Header from 'components/Header';
import SubBar from 'components/SubBar';
import Footer from 'containers/Footer';

const styleContainer = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const styleSectionDynamic = {
  flex: '1 1 100%',
  overflowY: 'auto',
};

const styleSectionStatic = {
  flex: '0 0',
};

const Layout = ({ children }) => (
  <div style={styleContainer}>
    <div style={styleSectionStatic}>
      <Header />
      <SubBar />
    </div>

    <div style={styleSectionDynamic}>
      {children}
    </div>

    <div style={styleSectionStatic}>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
