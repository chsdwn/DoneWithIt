import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { AppText } from '../components/AppText';
import { ListItem } from '../components/lists';

import colors from '../config/colors';

export const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/user.png')}
            title="Hulusi"
            subTitle="7 Listing"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
