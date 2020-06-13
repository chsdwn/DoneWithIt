import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppText } from './AppText';

interface IProps {
  error: string | undefined;
  visible: boolean | undefined;
}

export const ErrorMessage: React.FC<IProps> = ({ error, visible }) =>
  error && visible ? <AppText style={{ color: 'red' }}>{error}</AppText> : null;

const styles = StyleSheet.create({});
