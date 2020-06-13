import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import { IS_ANDROID } from '../constants/app';

interface IProps {
  iconName?: string | undefined;
}

export const AppTextInput: React.FC<IProps> = ({ iconName, ...rest }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: IS_ANDROID ? 'Roboto' : 'Avenir',
    color: colors.dark,
  },
});
