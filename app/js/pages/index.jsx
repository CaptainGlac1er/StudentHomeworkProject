import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CheckAuth from 'containers/CheckAuth';

const muiTheme = getMuiTheme({
  palette: theme,
});

export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <CheckAuth />
    </Provider>
  </MuiThemeProvider>
);
