import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import { text } from '../config/styles';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<IProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={[text, style]} {...rest}>
      {children}
    </Text>
  );
};
