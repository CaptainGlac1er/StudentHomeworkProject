import React, { Component, PropTypes } from 'react';
import Home from 'pages/Home';
import Login from 'containers/Login';
import Layout from 'components/Layout';

class CheckAuth extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
  };
  checkAuthSwitch = () => {
    if (this.props.user !== null) {
      return (
        <Layout>
          <Home />
        </Layout>
      );
    }
    return (
      <Login />
    );
  }
  render() {
    return (
      <div>
        {this.checkAuthSwitch()}
      </div>
    );
  }

}
export default CheckAuth;
