import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { ListItem } from '../components/ListItem';
import { ListItemSeperator } from '../components/ListItemSeperator';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/user.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/user.png'),
  },
];

export const MessagesScreen = () => {
  return (
    <FlatList
      data={messages}
      ItemSeparatorComponent={ListItemSeperator}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
