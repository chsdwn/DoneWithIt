import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { ListingEditScreen } from './src/screens/ListingEditScreen';
import { LoginScreen } from './src/screens/LoginScreen';

const imagePickerOptions: ImagePickerOptions = {
  title: 'Select Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const App = () => {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  useEffect(() => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('UNAVAILABLE');
          case RESULTS.DENIED:
            Alert.alert(
              'Camera Permission',
              'You need to give access to camera to use this app',
            );
          case RESULTS.BLOCKED:
            console.log('BLOCKED');
          case RESULTS.GRANTED:
            console.log('GRANTED');
        }
      })
      .catch((error) => console.log);
  }, []);

  const selectImage = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        setImageUri(undefined);
      } else if (response.error) {
        console.log('ImagePicker error, ', response.error);
      } else {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Button title="Image Picker" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 640, height: 480 }} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
