import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppText } from './src/components/AppText';

import { ViewImageScreen } from './src/screens/ViewImageScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { AppButton } from './src/components/AppButton';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <AppButton title="Login" onPress={() => console.log('login button')} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
