import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CheckAuth from 'containers/CheckAuth';
import { loginUser } from 'actions/login';

const muiTheme = getMuiTheme({
  palette: theme,
});

if (window.sessionStorage.getItem('auth')) {
  store.dispatch(loginUser(window.sessionStorage.getItem('auth')));
}

export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <CheckAuth />
    </Provider>
  </MuiThemeProvider>
);
