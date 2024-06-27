import AsyncStorage from "@react-native-async-storage/async-storage";

export async function handleLocalStorage(name: string, value: any | number) {
  await AsyncStorage.setItem(name, value as string);
}

export async function getLocalStorage(name: string) {
  return await AsyncStorage.getItem(name);
}
