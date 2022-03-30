/**
 * Todo Selectors
 * @format
 */

import type {RootState} from '../../redux';

const todoReducer = (state: RootState) => state.todoReducer;

export const selectAllTodo = (state: RootState) => todoReducer(state).todo;
