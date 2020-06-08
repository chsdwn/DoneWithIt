import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppButton } from './src/components/AppButton';
import { AppText } from './src/components/AppText';
import { Card } from './src/components/Card';

import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';
import { ViewImageScreen } from './src/screens/ViewImageScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

import colors from './src/config/colors';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ListingDetailsScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
