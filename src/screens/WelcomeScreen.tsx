import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import colors from '../config/colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/app';

export const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});
