import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TableRow = (props) => {
  return <View style={StyleSheet.flatten([
    {
      borderRightColor: 'rgba(229, 230, 234, 1)',
      borderRightWidth: 1,
      height: '100%',
      justifyContent: 'center'
    },
    props.style
  ])}>
    {props.children}
  </View>;
};
