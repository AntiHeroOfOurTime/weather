import React, { useEffect } from 'react';
import { Main } from './main';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'store/store';
import { getNameByCoordinates, getWeatherMain } from 'store/main';
import { getValueFromStorage, getPosition } from 'shared/utils';
import { LOCAL_STORAGE_KEYS } from 'shared/interface';
import { DEFAULT_CITY } from 'shared/constants';

export const MainPage = () => {
  const { weather, defaultCity, isLoading, error } = useSelector((state: RootState) => state.main);
  const currentCity = getValueFromStorage(LOCAL_STORAGE_KEYS.CITY);
  useEffect(() => {
    //если дефолтные значения отсуствуют запрашиваем данные по координатам
    if (!currentCity) {
      getPosition(
        (coordinates) => {
          dispatch(getNameByCoordinates(coordinates));
        }, // если геолокация разрешена то получем координаты
        () => {
          dispatch(getWeatherMain(DEFAULT_CITY));
        } //если геолокация запрещена то устанавливаем город по умолчанию
      );
    } else {
      dispatch(getWeatherMain(currentCity)); //запрос с дефолтными значениями
    }
  }, []);

  const onClickButton = (name: string) => {
    dispatch(getWeatherMain(name));
  };
  return <>
  <Main data={weather} city={defaultCity} error={error} isLoading={isLoading} onClickButton={onClickButton} />
    <span>vs test</span>
  </>};
