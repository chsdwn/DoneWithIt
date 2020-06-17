import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { ListingEditScreen } from './src/screens/ListingEditScreen';
import { LoginScreen } from './src/screens/LoginScreen';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ListingEditScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
