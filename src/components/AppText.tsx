import React from 'react';
import { Platform, StyleSheet, Text, StyleProp, TextStyle } from 'react-native';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<IProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
      },
    }),
  },
});
