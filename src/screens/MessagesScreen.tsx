import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { ListItem } from '../components/ListItem';
import { ListItemDeleteAction } from '../components/ListItemDeleteAction';
import { ListItemSeperator } from '../components/ListItemSeperator';

import { IMessage } from '../models/IMessage';

const initialMessages: IMessage[] = [
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
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message: IMessage) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      ItemSeparatorComponent={ListItemSeperator}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log(item.id)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
