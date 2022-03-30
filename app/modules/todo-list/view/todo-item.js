/**
 * Todo Item
 * @format
 */
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

import {Input, IconButton} from '../../../components';
import {styles} from './styles';

const TodoItem = ({item, index, onPressDelete, onPressSave}) => {
  const [value, setValue] = useState();
  const [editMode, setEditMode] = useState('');

  return (
    <View style={styles.itemStyle}>
      {editMode ? (
        <Input
          value={value}
          onChangeText={setValue}
          containerStyle={{paddingHorizontal: 0}}
          placeholder="Enter your item..."
          autoFocus
          multiline
          rightContent={
            <View style={styles.row}>
              <Button
                title="Save"
                onPress={() => {
                  onPressSave(value, index);
                  setEditMode(false);
                }}
              />
              <Button
                title="Cancel"
                onPress={() => setEditMode(false)}
                color="gray"
              />
            </View>
          }
        />
      ) : (
        <>
          <Text style={styles.itemLabelStyle}>{item}</Text>
          <View style={styles.actionContainer}>
            <IconButton
              name="pencil"
              iconStyle={{color: 'blue', marginRight: 5}}
              onPress={() => {
                setEditMode(!editMode);
                setValue(item);
              }}
            />
            <IconButton
              name="ios-close-circle"
              iconStyle={{color: 'red'}}
              onPress={() => onPressDelete(item)}
            />
          </View>
        </>
      )}
    </View>
  );
};

export {TodoItem};
