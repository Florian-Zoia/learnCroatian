import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import { PermissionsAndroid, Platform } from 'react-native';

export const exportAsyncStorageData = async () => {
  try {
    // Ask permission on Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.warn('Storage permission denied');
        return;
      }
    }

    // Read all AsyncStorage data
    const allKeys = await AsyncStorage.getAllKeys();
    const allItems = await AsyncStorage.multiGet(allKeys);
    const data = Object.fromEntries(allItems);
    const jsonData = JSON.stringify(data, null, 2);

    // Path to the external storage LearnCroatian folder
    const dirPath = `${RNFS.ExternalStorageDirectoryPath}/LearnCroatian`;

    // Ensure directory exists
    const exists = await RNFS.exists(dirPath);
    if (!exists) {
      await RNFS.mkdir(dirPath);
    }

    // Save file
    const filePath = `${dirPath}/async_data_export.json`;
    await RNFS.writeFile(filePath, jsonData, 'utf8');

    console.log('✅ Data exported to:', filePath);
  } catch (error) {
    console.error('❌ Export failed:', error);
  }
};
