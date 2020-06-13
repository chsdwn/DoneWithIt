import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';

import { AppButton } from './src/components/AppButton';
import { AppText } from './src/components/AppText';
import { AppTextInput } from './src/components/AppTextInput';
import { Card } from './src/components/Card';
import { Icon } from './src/components/Icon';
import { ListItem } from './src/components/ListItem';

import { AccountScreen } from './src/screens/AccountScreen';
import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';
import { ListingsScreen } from './src/screens/ListingsScreen';
import { MessagesScreen } from './src/screens/MessagesScreen';
import { ViewImageScreen } from './src/screens/ViewImageScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

import colors from './src/config/colors';

export const App = () => {
  const [isNew, setIsNew] = useState(false);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Switch value={isNew} onValueChange={setIsNew} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
