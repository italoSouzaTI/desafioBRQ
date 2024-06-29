import { FAVORITE_STORAGE } from "@core/Service/Storage/StorageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IPerson } from "./People/PeopleTypes";

export async function favoriteGetAll() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    if (response) {
      return await JSON.parse(response);
    }
    return [];
  } catch (error) {
    throw error;
  }
}

export async function favoriteCreate(person: IPerson[]) {
  try {
    const jsonValue = JSON.stringify(person);
    await AsyncStorage.setItem(FAVORITE_STORAGE, jsonValue);
  } catch (error) {
    throw error;
  }
}

export async function favoriteRemove() {
  try {
    await AsyncStorage.removeItem(FAVORITE_STORAGE);
  } catch (error) {
    throw error;
  }
}
