import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Card } from '../components/Card';

import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

export const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
});
