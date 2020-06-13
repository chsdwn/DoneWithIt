import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppButton } from '../components/AppButton';
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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              iconName="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              secureTextEntry
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
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
