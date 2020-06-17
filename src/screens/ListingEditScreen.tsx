import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CategoryPickerItem } from '../components/CategoryPickerItem';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';

import {
  categories,
  validationSchema,
} from '../constants/screens/listingEditScreen';

export const ListingEditScreen = () => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={console.log}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          numberOfLines={3}
          multiline
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
