import { LOCAL_STORAGE_KEYS } from 'shared/interface';
//функция для получения значений из хранилища
export const getValueFromStorage = (key: LOCAL_STORAGE_KEYS) => {
  return JSON.parse(`${localStorage.getItem(key)}`);
};
//функция которая устанавливает значения в localStorage
export const setValueInStorage = (keys: LOCAL_STORAGE_KEYS[], values: any[]) => {
  keys.map((key, index) => {
    localStorage.setItem(key, JSON.stringify(values[index]));
  });
};
