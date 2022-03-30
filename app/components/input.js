/**
 * Input component
 * @format
 */
import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  StyleSheet,
} from 'react-native';

type Props = TextInputProps & {
  rightContent: React.ReactNode,
  containerStyle: StyleProp<View>,
};

const Input = (props: Props) => {
  const {containerStyle, style, rightContent, ...rest} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput {...rest} style={[styles.inputStyle, style]} />
      {rightContent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
  },
});

export {Input};
