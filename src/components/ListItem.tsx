import React from 'react';
import { StyleSheet, Text, View, ImageURISource, Image } from 'react-native';

import { AppText } from './AppText';
import colors from '../config/colors';

interface IProps {
  image: ImageURISource[];
  title: string;
  subTitle: string;
}

export const ListItem: React.FC<IProps> = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'skyblue',
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
  subTitle: {
    color: colors.medium,
  },
});
