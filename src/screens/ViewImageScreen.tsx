import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/app';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
      />
      <View style={styles.closeDeleteContainer}>
        <View style={styles.closePlaceholder} />
        <View style={styles.deletePlaceholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  closeDeleteContainer: {
    marginHorizontal: SCREEN_WIDTH * 0.05,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closePlaceholder: {
    width: SCREEN_WIDTH * 0.1,
    height: SCREEN_WIDTH * 0.1,
    backgroundColor: 'tomato',
  },
  deletePlaceholder: {
    width: SCREEN_WIDTH * 0.1,
    height: SCREEN_WIDTH * 0.1,
    backgroundColor: 'skyblue',
  },
});
