import React from 'react';
import { Block } from './block';
import { IResponseWeather, IWeatherHour } from 'shared/interface';
import styles from './styles.module.css';

interface IProps {
  title: string;
  data: IWeatherHour[];
  units: IResponseWeather['hourly_units'];
}

export const PeriodCard = ({ title, data, units }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.blocks}>
        {data.map((el, index) => (
          <Block key={index} data={el} units={units} />
        ))}
      </div>
    </div>
  );
};
