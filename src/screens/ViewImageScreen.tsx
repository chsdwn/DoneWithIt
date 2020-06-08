import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants/app';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
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
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 30,
    elevation: 1,
    zIndex: 10,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 30,
    elevation: 1,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
