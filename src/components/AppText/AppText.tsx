import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const AppText: React.FC<IProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
