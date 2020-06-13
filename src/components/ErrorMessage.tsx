import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppText } from './AppText';

export const ErrorMessage: React.FC<{ error: string | undefined }> = ({
  error,
}) => (error ? <AppText style={{ color: 'red' }}>{error}</AppText> : null);

const styles = StyleSheet.create({});
