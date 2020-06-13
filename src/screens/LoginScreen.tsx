import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { AppButton } from '../components/AppButton';
import { AppTextInput } from '../components/AppTextInput';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppTextInput
        iconName="email"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={setEmail}
      />
      <AppTextInput
        iconName="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        textContentType="password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
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
