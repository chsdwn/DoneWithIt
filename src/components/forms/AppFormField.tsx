import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import { AppTextInput } from '../AppTextInput';
import { ErrorMessage } from './ErrorMessage';

interface IProps {
  name: string;
  width?: number;
}

export const AppFormField: React.FC<IProps> = ({ name, width, ...rest }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});
