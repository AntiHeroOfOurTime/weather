import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppApi } from 'api/app.api';
import { IResponseWeather, IWeatherHourlyState } from 'shared/interface';
import { convertHourlyWeather } from 'shared/utils';

interface IMorePageStateType {
  city: string;
  weather: IWeatherHourlyState;
  isLoading: boolean;
  error: string;
}

const initialState: IMorePageStateType = {
  city: '',
  weather: {} as IWeatherHourlyState,
  isLoading: false,
  error: '',
};

//запрос на получение данных о погоде
export const getWeatherMore = createAsyncThunk('more/getWeather', async (city: string, { dispatch }) => {
  dispatch(setIsLoadingMore(true));
  try {
    dispatch(setErrorMore(''));
    //запос на получение координат
    const responseCoordinate = await AppApi.getCoordinatesByName(city);
    // если город не найден прийдет ответ со статусом 200 но с пустым результатом тогда самостоятельно пробрасываем ошибку
    if (!responseCoordinate?.results) {
      throw new Error('Ничего не найдено по данному названию');
    }
    dispatch(setCurrentCity(responseCoordinate.results[0].name));
    const responseWeather = await AppApi.getWeather(
      { latitude: responseCoordinate.results[0].latitude, longitude: responseCoordinate.results[0].longitude },
      'hourly'
    );
    dispatch(setWeatherMore(responseWeather));
  } catch (e: any) {
    //если ошибка пришла с сервера то мы устанавливаем свое сообщение об ошибке
    e.name === 'AxiosError'
      ? dispatch(setErrorMore('Произошла ошибка при получении данных'))
      : dispatch(setErrorMore(e.message));
  } finally {
    dispatch(setIsLoadingMore(false));
  }
});
export const moreSlice = createSlice({
  name: 'more',
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setWeatherMore: (state, action: PayloadAction<IResponseWeather>) => {
      //конвертируем данные для лучшего исползования
      state.weather.weather = convertHourlyWeather(action.payload.hourly);
      state.weather.units = action.payload.hourly_units;
    },
    setIsLoadingMore: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMore: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.weather = {} as IWeatherHourlyState;
      state.city = '';
    },
  },
});
export const { setErrorMore, setIsLoadingMore, setWeatherMore, setCurrentCity } = moreSlice.actions;
