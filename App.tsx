import React, { useEffect } from 'react';
import { Alert, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { ListingEditScreen } from './src/screens/ListingEditScreen';
import { LoginScreen } from './src/screens/LoginScreen';

export const App = () => {
  useEffect(() => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('UNAVAILABLE');
          case RESULTS.DENIED:
            Alert.alert(
              'Camera Permission',
              'You need to give access to camera to use this app',
            );
          case RESULTS.BLOCKED:
            console.log('BLOCKED');
          case RESULTS.GRANTED:
            console.log('GRANTED');
        }
      })
      .catch((error) => console.log);
  }, []);

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
