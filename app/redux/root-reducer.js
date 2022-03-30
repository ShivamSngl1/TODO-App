/**
 * Root Reducer
 * combine all reducers to create root reducer
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {todoReducer} from '../modules/todo-list';

/*-----[ persist configurations ]------*/
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todoReducer'],
};

const rootReducer = combineReducers({
  todoReducer,
});

const persistRootReducer = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export {persistRootReducer};
