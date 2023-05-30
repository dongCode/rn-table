import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { styles } from './styles';

export const Cell = ({ data, width, height, flex, style, textStyle, borderStyle, ...props }) => {
  const textDom = React.isValidElement(data) ? (
    data
  ) : (
    <Text style={StyleSheet.flatten([styles.text, textStyle])} {...props}>
      {data}
    </Text>
  );
  const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderRightWidth = borderTopWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={StyleSheet.flatten([
        {
          borderTopWidth,
          borderRightWidth,
          borderColor
        },
        styles.cell,
        style
      ])}
    >
      {textDom}
    </View>
  );
};
