/**
 * Todo list screen
 * @format
 */
import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {addTodoItem, deleteTodoItem, updateTodoItem} from '../actions';
import {selectAllTodo} from '../selectors';
import {IconButton, Input} from '../../../components';
import {TodoItem} from './todo-item';
import {styles} from './styles';

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const todo = useSelector(selectAllTodo);

  const onPressSave = (item, index) => {
    dispatch(updateTodoItem({index, item}));
  };

  const onPressDelete = item => {
    dispatch(deleteTodoItem(item));
  };

  const addItem = () => {
    dispatch(addTodoItem(value));
    setValue('');
  };

  const renderTodo = itemProps => {
    return (
      <TodoItem
        {...itemProps}
        onPressDelete={onPressDelete}
        onPressSave={onPressSave}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Todo List</Text>
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Enter your item..."
        containerStyle={styles.inputContainer}
        rightContent={
          <IconButton name="add-circle" onPress={addItem} disabled={!value} />
        }
      />
      <FlatList
        keyboardShouldPersistTaps="handled"
        style={styles.listStyle}
        data={todo}
        renderItem={renderTodo}
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      />
    </View>
  );
};

export default TodoListScreen;
