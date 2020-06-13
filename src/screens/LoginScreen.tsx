import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Formik } from 'formik';

import { AppButton } from '../components/AppButton';
import { AppTextInput } from '../components/AppTextInput';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={console.log}>
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              iconName="email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              iconName="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange('password')}
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
