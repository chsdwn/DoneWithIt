import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppText } from './AppText';
import { IItem } from '../models/IITem';

interface IProps {
  item: IItem;
  onPress: () => void;
}

export const PickerItem: React.FC<IProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
