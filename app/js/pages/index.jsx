import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

export default () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
);
