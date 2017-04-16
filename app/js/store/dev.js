import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools'; // eslint-disable-line import/no-extraneous-dependencies
import rootReducer from '../reducers';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const store = createStore(
  rootReducer,
  compose(
    persistState(getDebugSessionKey()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default; // eslint-disable-line global-require

    store.replaceReducer(nextReducer);
  });
}

export default store;
