import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from './Icon';
import { IItem } from '../models/IITem';
import { AppText } from './AppText';

interface IProps {
  item: IItem;
  label: string;
  onPress: () => void;
}

export const CategoryPickerItem: React.FC<IProps> = ({
  item,
  label,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
