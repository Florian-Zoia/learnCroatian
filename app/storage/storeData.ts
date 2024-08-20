import AsyncStorage from "@react-native-async-storage/async-storage";
import { Word } from "./models";

export const storeData = async (value: Word[], key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };