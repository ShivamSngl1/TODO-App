/**
 * Todo actions
 * @format
 */

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const addTodoItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteTodoItem = item => ({
  type: DELETE_ITEM,
  payload: item,
});

export const updateTodoItem = payload => ({
  type: UPDATE_ITEM,
  payload: payload,
});
