import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { MessagesScreen } from './src/screens/MessagesScreen';
import { LoginScreen } from './src/screens/LoginScreen';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <MessagesScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
