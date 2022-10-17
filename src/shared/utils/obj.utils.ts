import { ICoordinates, IDailyWeather, IResponseWeather, IWeatherForDay, IWeatherHour } from 'shared/interface';

//функция для получения сегоднешней даты и даты окончания в пропсах указываем через сколко дней конец даты
export const getStartAndEndDate = (countDay: number = 2) => {
  const startDate = new Date();
  const endDate = new Date(startDate.getTime() + countDay * 24 * 3600 * 1000);
  return { startDate: startDate.toLocaleDateString('sv-AX'), endDate: endDate.toLocaleDateString('sv-AX') };
};

//функция для получения геолокации пользователя принимает в себя 2 callbacks первый срабатывает когда ползователь разрешил геолокацию второй когда отклонил
export const getPosition = (resolve: (coordinates: ICoordinates) => void, reject: () => void) => {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      //если пользователь разрешает получеие локации то возращаем координыаты
      resolve({ latitude: location.coords.latitude, longitude: location.coords.longitude });
    },
    () => reject()
  );
};

export const convertDailyWeather = (data: IResponseWeather['daily']): IDailyWeather[] => {
  let arr: IDailyWeather[] = [];
  data?.time.forEach((el, index) => {
    arr[index] = {
      precipitation_sum: data.precipitation_sum[index],
      temperature_2m_max: data.temperature_2m_max[index],
      temperature_2m_min: data.temperature_2m_min[index],
      time: data.time[index],
      weathercode: data.weathercode[index],
      winddirection_10m_dominant: data.winddirection_10m_dominant[index],
      windspeed_10m_max: data.windspeed_10m_max[index],
    };
  });
  return arr;
};
export const convertHourlyWeather = (data: IResponseWeather['hourly']) => {
  let arrHour: IWeatherHour[] = [];
  data.time.forEach((el, index) => {
    arrHour[index] = {
      relativehumidity_2m: data.relativehumidity_2m[index],
      temperature_2m: data.temperature_2m[index],
      time: data.time[index],
      weathercode: data.weathercode[index],
      winddirection_10m: data.winddirection_10m[index],
      windspeed_10m: data.windspeed_10m[index],
    };
  });
  let arrDays: IWeatherForDay[] = [];
  for (let i = 0; i < Math.ceil(arrHour.length / 24); i++) {
    const currentDay = arrHour.slice(i * 24, i * 24 + 24);
    arrDays[i] = {
      hourly: currentDay,
      average_weather: {
        relativehumidity_2m: currentDay.reduce((prev, cur) => prev + cur.relativehumidity_2m, 0) / currentDay.length,
        temperature_2m: currentDay.reduce((prev, cur) => prev + cur.temperature_2m, 0) / currentDay.length,
        time: currentDay[0].time,
        weathercode: currentDay.reduce((prev, cur) => (prev > cur.weathercode ? prev : cur.weathercode), 0),
        winddirection_10m: currentDay.reduce((prev, cur) => prev + cur.temperature_2m, 0) / currentDay.length,
        windspeed_10m: currentDay.reduce((prev, cur) => prev + cur.windspeed_10m, 0) / currentDay.length,
      },
    };
  }
  return arrDays;
};
