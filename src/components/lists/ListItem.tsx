import React from 'react';
import {
  StyleSheet,
  View,
  ImageURISource,
  Image,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AppText } from '../AppText';

import colors from '../../config/colors';

interface IProps {
  image?: ImageURISource[];
  title: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?: () => any;
  IconComponent?: any;
}

export const ListItem: React.FC<IProps> = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent: ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'skyblue',
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
  subTitle: {
    color: colors.medium,
  },
});
