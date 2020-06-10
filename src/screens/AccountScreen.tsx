import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Icon } from '../components/Icon';
import { ListItem } from '../components/ListItem';
import { ListItemSeperator } from '../components/ListItemSeperator';

import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <ListItem
        title="Hulusi"
        subTitle="hulusi@a.b"
        image={require('../assets/user.png')}
      />
      <View style={styles.menuItemsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  menuItemsContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
});
