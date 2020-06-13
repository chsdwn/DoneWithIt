import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppButton } from '../components/AppButton';
import { AppFormField } from '../components/AppFormField';
import { AppText } from '../components/AppText';
import { AppTextInput } from '../components/AppTextInput';
import { ErrorMessage } from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={console.log}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <>
            <AppFormField
              name="email"
              iconName="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              name="lock"
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
