import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AppText } from './src/components/AppText';
import { Card } from './src/components/Card';

import { ViewImageScreen } from './src/screens/ViewImageScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { AppButton } from './src/components/AppButton';
import colors from './src/config/colors';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView
        style={{
          backgroundColor: '#f8f4f4',
          padding: 20,
        }}>
        <Card
          title="Red jacket for sale"
          subTitle="$100"
          image={require('./src/assets/jacket.jpg')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
