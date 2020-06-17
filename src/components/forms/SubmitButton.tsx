import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import { AppButton } from '../AppButton';

interface IProps {
  title: string;
}

export const SubmitButton: React.FC<IProps> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

const styles = StyleSheet.create({});
