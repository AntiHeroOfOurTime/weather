import React, { useState } from 'react';
import { PeriodCard } from './periodCard';
import { DayCard } from './dayCard';
import styles from './styles.module.css';
import { IWeatherForDay, IResponseWeather } from 'shared/interface';

interface IProps {
  data: IWeatherForDay;
  units: IResponseWeather['hourly_units'];
}

export const DailyCard = ({ data, units }: IProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={styles.container}>
      <DayCard values={data.average_weather} units={units} />
      <div className={`${styles.sections} ${focus && '!flex'}`}>
        <PeriodCard title={'Погода в первой половине дня'} data={data.hourly.slice(0, 12)} units={units} />
        <PeriodCard title={'Погода во второй половине дня'} data={data.hourly.slice(12, 24)} units={units} />
      </div>
      <button onClick={() => setFocus((prevState) => !prevState)}>{focus ? 'Закрыть' : 'Подробнее'}</button>
    </div>
  );
};
