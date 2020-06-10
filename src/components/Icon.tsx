import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

interface IProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

export const Icon: React.FC<IProps> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      }}>
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
