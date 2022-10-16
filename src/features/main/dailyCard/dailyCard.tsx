import React from 'react';
import {IDailyWeather} from "shared/interface";
import {weatherCode} from "shared/constants";
import styles from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import { IconWeather} from "shared/components/iconWeather";

export const DailyCard = (values: IDailyWeather) => {
    const date = new Date(values.time).toLocaleDateString()
    const units =  useSelector((state:RootState)=>state.main.weather.daily_units)
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <span>Погода по состоянию на {date}</span>
                <IconWeather name={values.weathercode}/>
            </div>
            <div>
                <div className={styles.infoBlock}>
                    <span >Максимальная температура:</span>
                    <span className={styles.value}>{values.temperature_2m_max} {units.temperature_2m_max}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Минимальная температура:</span>
                    <span className={styles.value}>{values.temperature_2m_min} {units.temperature_2m_min}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Сумма дневных осадков:</span>
                    <span className={styles.value}>{values.precipitation_sum} {units.precipitation_sum}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Погодные условия:</span>
                    <span className={styles.value}>{weatherCode.find(el=>el.code === values.weathercode)?.name}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Напрвление ветра:</span>
                    <span className={styles.value}>{values.winddirection_10m_dominant} {units.winddirection_10m_dominant}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Максимальная скорость ветра:</span>
                    <span className={styles.value}>{values.windspeed_10m_max} {units.windspeed_10m_max}</span>
                </div>
            </div>

        </div>
    );
};