import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/app';

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/background.jpg')}
        resizeMode="cover"
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo-red.png')}
          resizeMode="contain"
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginPlaceholder} />
      <View style={styles.registerPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.05,
  },
  logo: {
    width: SCREEN_WIDTH * 0.22,
    height: SCREEN_WIDTH * 0.22,
  },
  loginPlaceholder: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: 'tomato',
    justifyContent: 'flex-end',
  },
  registerPlaceholder: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: 'skyblue',
    justifyContent: 'flex-end',
  },
});
