import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoordinates, IDailyWeatherState, IResponseWeather, LOCAL_STORAGE_KEYS } from 'shared/interface';
import { AppApi } from 'api/app.api';
import { setValueInStorage, convertDailyWeather } from 'shared/utils';

interface IMainStateType {
  defaultCity: string;
  defaultCoordinates: ICoordinates;
  isLoading: boolean;
  error: string;
  weather: IDailyWeatherState;
}
//санка для получения данных о наименовании населенного пункта
export const getNameByCoordinates = createAsyncThunk(
  'main/getNameByCoordinates',
  async (coordinates: ICoordinates, { dispatch }) => {
    dispatch(setIsLoadingMain(true));
    try {
      const response = await AppApi.getNameByCoordinates(coordinates);
      dispatch(getWeatherMain(response.locality));
    } catch (e: any) {
      setErrorMain('ошибка получения имени');
    } finally {
      dispatch(setIsLoadingMain(false));
    }
  }
);
//санка для получения данных о погоде
export const getWeatherMain = createAsyncThunk('main/getWeather', async (city: string, { dispatch }) => {
  dispatch(setIsLoadingMain(true));
  try {
    dispatch(setErrorMain(''));
    //запрос на получение коокдинат
    const responseCoordinate = await AppApi.getCoordinatesByName(city);
    // если город не найден прийдет ответ со статусом 200 но с пустым результатом тогда самостоятельно пробрасываем ошибку
    if (!responseCoordinate?.results) {
      throw new Error('Ничего не найдено по данному названию');
    }
    dispatch(
      setDefaultValue({
        city: responseCoordinate.results[0].name,
        coordinates: {
          latitude: responseCoordinate.results[0].latitude,
          longitude: responseCoordinate.results[0].longitude,
        },
      })
    );
    //запрос на получение погоды
    const responseWeather = await AppApi.getWeather(
      { latitude: responseCoordinate.results[0].latitude, longitude: responseCoordinate.results[0].longitude },
      'daily'
    );
    dispatch(setWeatherMain(responseWeather));
  } catch (e: any) {
    if (!e?.data?.error) dispatch(setErrorMain(e.message));
    else dispatch(setErrorMain('Произошла ошибка при получении данных'));
  } finally {
    dispatch(setIsLoadingMain(false));
  }
});

const initialState: IMainStateType = {
  defaultCity: '',
  defaultCoordinates: {} as ICoordinates,
  isLoading: false,
  error: '',
  weather: {} as IDailyWeatherState,
};
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setDefaultValue: (state, action: PayloadAction<{ city: string; coordinates: ICoordinates }>) => {
      state.defaultCity = action.payload.city;
      state.defaultCoordinates = action.payload.coordinates;
      setValueInStorage(
        [LOCAL_STORAGE_KEYS.CITY, LOCAL_STORAGE_KEYS.COORDINATES],
        [action.payload.city, action.payload.coordinates]
      );
    },
    setIsLoadingMain: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMain: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setWeatherMain: (state, action: PayloadAction<IResponseWeather>) => {
      state.weather.units = action.payload.daily_units;
      //конвертируем данные для лучшего исползования
      state.weather.weather = convertDailyWeather(action.payload.daily);
    },
  },
});
export const { setDefaultValue, setErrorMain, setIsLoadingMain, setWeatherMain } = mainSlice.actions;
