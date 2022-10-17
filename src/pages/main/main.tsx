import React from 'react';
import { DailyCard } from 'features/main';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTES } from 'shared/constants';
import { Loader } from 'shared/components/loader';
import { IDailyWeatherState } from 'shared/interface/main.interface';

interface IProps {
  data: IDailyWeatherState;
  isLoading: boolean;
  city: string;
  error: string;
  onClickButton: (name: string) => void;
}

export const Main = ({ data, isLoading, city, error, onClickButton }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span className={styles.defaultCity}>Сменить город по умолчанию</span>
      <div className={styles.buttonsCity}>
        <button onClick={() => onClickButton('Moscow')}>Москва</button>
        <button onClick={() => onClickButton('Minsk')}>Минск</button>
        <button onClick={() => onClickButton('Bratislava')}>Братислава</button>
      </div>
      <h1 className={styles.title}>Погода на три дня в городе {city}</h1>
      {isLoading && <Loader />}
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        <div className={styles.cards}>
          {data.weather?.map((el, index) => (
            <DailyCard key={index} values={el} units={data.units} />
          ))}
        </div>
      )}
      <button className={styles.button} onClick={() => navigate(`${ROUTES.MORE}?search=milan`)}>
        Подробнее о погоде в Милане
      </button>
    </div>
  );
};
