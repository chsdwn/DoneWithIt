import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { IS_ANDROID } from '../constants/app';

interface IProps {
  children: React.ReactNode;
}

export const AppText: React.FC<IProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: IS_ANDROID ? 'Roboto' : 'Avenir',
  },
});
