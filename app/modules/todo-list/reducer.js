/**
 * Todo reducer
 * @format
 */

import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from './actions';

const initState = {
  todo: ['Read the book'],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, todo: [action.payload, ...state.todo]};
    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter(item => item !== action.payload),
      };
    case UPDATE_ITEM: {
      const {index, item} = action.payload;
      const _clonedTodo = [...state.todo];
      _clonedTodo[index] = item;

      return {
        ...state,
        todo: _clonedTodo,
      };
    }
    default:
      return state;
  }
};

export {todoReducer};
