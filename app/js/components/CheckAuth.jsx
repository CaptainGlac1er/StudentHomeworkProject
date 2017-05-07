import React, { Component, PropTypes } from 'react';
import Home from 'pages/Home';
import Login from 'containers/Login';
import Layout from 'components/Layout';
import Snackbar from 'material-ui/Snackbar';

class CheckAuth extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    snackbarMessage: PropTypes.string.isRequired,
    snackbarMessageEdit: PropTypes.func.isRequired,
  };

  checkAuthSwitch = () => {
    if (this.props.user !== '') {
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
  snackMessageClose = () => {
    this.props.snackbarMessageEdit('');
  }

  render() {
    return (
      <div>
        <div>
          {this.checkAuthSwitch()}
        </div>
        <Snackbar
          open={this.props.snackbarMessage !== ''}
          message={this.props.snackbarMessage}
          autoHideDuration={1000}
          onActionTouchTap={this.snackMessageClose}
          onRequestClose={this.snackMessageClose}
        />
      </div>
    );
  }
}

export default CheckAuth;
