import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Layout from 'components/Layout';
import store from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: theme,
});

export default () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);
