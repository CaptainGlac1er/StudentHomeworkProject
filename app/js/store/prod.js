import { createStore, compose } from 'redux';
import reducer from '../reducers';

const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
