import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppText } from './AppText';

interface IProps {
  label: string;
  onPress: () => void;
}

export const PickerItem: React.FC<IProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
