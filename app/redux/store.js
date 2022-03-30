/**
 * Redux Store
 * @format
 */

import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

import {persistRootReducer} from './root-reducer';

/*-----------[ configure store ]------------*/
function configureStore() {
  const store = createStore(persistRootReducer);

  const persistor = persistStore(store);

  return {store, persistor};
}

export {configureStore};
