import { IResponseWeather } from './app.interface';

export interface IDailyWeatherState {
  weather: IDailyWeather[];
  units: IResponseWeather['daily_units'];
}
export interface IDailyWeather {
  precipitation_sum: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string;
  weathercode: number;
  winddirection_10m_dominant: number;
  windspeed_10m_max: number;
}
