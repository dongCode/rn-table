import { StyleSheet } from 'react-native';
import { HEIGHT } from "./constants";

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(229, 230, 234, 1)',
    borderBottomWidth: 1,
  },
  header: {
    height: 36,
    backgroundColor: 'rgba(242, 243, 245, 1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cell: {
    justifyContent: 'center',
    height: HEIGHT,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'rgba(29, 33, 41, 1)',
    fontWeight: '400',
    fontSize: 13
  }
});
