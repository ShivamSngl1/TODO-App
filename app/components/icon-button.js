/**
 * Icon button
 * @format
 */
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPress: () => void,
  disabled: boolean,
  name: string,
  iconStyle: any,
  color: string,
};

const IconButton = (props: Props) => {
  const {onPress, disabled, name, color, iconStyle} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && styles.disabledStyle]}>
      <Icon name={name} style={[styles.iconStyle, iconStyle]} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  disabledStyle: {
    opacity: 0.5,
  },
  iconStyle: {
    fontSize: 27,
    color: '#222',
  },
});

export {IconButton};
