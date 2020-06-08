import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  children: React.ReactNode;
}

export const AppText: React.FC<IProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});
