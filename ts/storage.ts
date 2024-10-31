import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData<T>(
    key: string,
    value: T
 ): Promise<void> {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
};

export async function loadData<T>(key: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue != null) {
      return JSON.parse(jsonValue) as T;
    }
    return null;
  } catch (e) {
    console.error(`Error loading data for key: ${key}`, e);
    return null;
  }
};