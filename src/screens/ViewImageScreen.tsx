import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/app';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65',
    position: 'absolute',
    top: 40,
    left: 30,
    elevation: 1,
    zIndex: 10,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#3ecdc4',
    position: 'absolute',
    top: 40,
    right: 30,
    elevation: 1,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
