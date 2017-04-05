import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import LayoutTest from 'components/LayoutTest';
import store from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <LayoutTest>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={Home} />
          </Switch>
        </LayoutTest>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);
