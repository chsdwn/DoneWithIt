import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import { AppTextInput } from './AppTextInput';
import { ErrorMessage } from './ErrorMessage';

interface IProps {
  name: string;
}

export const AppFormField: React.FC<IProps> = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});
