import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { LoginScreen } from './src/screens/LoginScreen';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
