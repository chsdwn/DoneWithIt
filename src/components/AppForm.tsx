import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

interface IProps {
  initialValues: {};
  onSubmit: () => void;
  validationSchema: any;
  children: React.ReactNode;
}

export const AppForm: React.FC<IProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

const styles = StyleSheet.create({});
