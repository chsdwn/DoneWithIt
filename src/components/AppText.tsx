import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

interface IProps {
  children: React.ReactNode;
}

export const AppText: React.FC<IProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
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
