import React from 'react';
import { DailyCard } from 'features/more';
import { IWeatherHourlyState } from 'shared/interface';
import styles from './styles.module.css';
import { Loader } from 'shared/components';

interface IProps {
  onChangeInput: (value: string) => void;
  weather: IWeatherHourlyState;
  searchValue: string;
  isLoading: boolean;
  error: string;
  city: string;
}

export const More = ({ onChangeInput, weather, searchValue, error, isLoading, city }: IProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Введите нужный вам город и получите погоду в этом городе </h1>
      <input
        value={searchValue}
        className={styles.input}
        placeholder={'Введите нужный город'}
        onChange={(event) => {
          onChangeInput(event.target.value);
        }}
      />
      {city && <span className={styles.city}>Найденный город: {city}</span>}
      {isLoading && <Loader />}
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <div className={styles.cards}>
          {weather?.weather?.map((el, index) => (
            <DailyCard units={weather.units} data={el} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
