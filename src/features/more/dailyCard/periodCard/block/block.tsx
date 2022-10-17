import React from 'react';
import { weatherCode } from 'shared/constants';
import { IResponseWeather, IWeatherHour } from 'shared/interface';
import styles from './styles.module.css';

interface IProps {
  units: IResponseWeather['hourly_units'];
  data: IWeatherHour;
}

export const Block = ({ units, data }: IProps) => {
  const date = new Date(data.time).toLocaleTimeString();
  return (
    <div className={styles.container}>
      <span className={styles.time}>на {date.slice(0, 5)}</span>
      <div className={styles.infoBlock}>
        <span>Температура : </span>
        <span className={styles.value}>
          {data.temperature_2m.toFixed(0)} {units.temperature_2m}
        </span>
      </div>
      <div className={styles.infoBlock}>
        <span>Погодные условия: </span>
        <span className={styles.value}>{weatherCode.find((el) => el.code === data.weathercode)?.name}</span>
      </div>
      <div className={styles.infoBlock}>
        <span>Влажность:</span>
        <span className={styles.value}>
          {data.relativehumidity_2m}
          {units.relativehumidity_2m}
        </span>
      </div>
      <div className={styles.infoBlock}>
        <span>Скорость ветра:</span>
        <span className={styles.value}>
          {data.windspeed_10m}
          {units.windspeed_10m}
        </span>
      </div>
      <div className={styles.infoBlock}>
        <span>Направление ветра:</span>
        <span className={styles.value}>
          {data.winddirection_10m}
          {units.winddirection_10m}
        </span>
      </div>
    </div>
  );
};
