/**
 * Todo App
 * Initialize redux store
 * @format
 */

import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {configureStore} from './redux';
import {TodoListScreen} from './modules/todo-list';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TodoListScreen />
      </PersistGate>
    </Provider>
  );
};

export {App};
