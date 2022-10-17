import { IResponseWeather } from './app.interface';

export interface IWeatherHourlyState {
  weather: IWeatherForDay[];
  units: IResponseWeather['hourly_units'];
}
export interface IWeatherHour {
  relativehumidity_2m: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  winddirection_10m: number;
  windspeed_10m: number;
}
export interface IWeatherForDay {
  hourly: IWeatherHour[];
  average_weather: IWeatherHour;
}
