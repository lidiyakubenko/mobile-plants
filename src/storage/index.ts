import AsyncStorage from '@react-native-async-storage/async-storage'

export const STORAGE_KEYS = {
    plants: '@storage_Plants'
}
type StorageKeys = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS]

export const initialPlants = ['Фиалка', 'Кактус','Суккулент','Монстера']

const storeData = async (
    key: StorageKeys,
    data: (string | number)[]
): Promise<void> => {
    try {
        const value = JSON.stringify(data)
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.error('storeData', e)
    }
}
const getData = async (key: StorageKeys) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value !== null ? JSON.parse(value) : null
    } catch (e) {
        console.error('getStoreData', e)
    }
}
export default {storeData, getData};
