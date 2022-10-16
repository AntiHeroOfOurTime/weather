import React from 'react';
import {IHourlyWeather} from "shared/interface";
import {weatherCode} from "shared/constants";
import styles from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "store/store";

export const DayCard = (values: IHourlyWeather) => {
    const date = new Date(values.time).toLocaleDateString()
    const units = useSelector((state:RootState)=>state.more.weather.hourly_units)
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Среднии показатели за {date}</h3>
            <div className={styles.info}>
                <div>{weatherCode.find(el=>el.code === values?.weathercode)?.icon()}</div>
                <div className={styles.infoBlock}>
                    <span>Температура:</span>
                    <span className={styles.values}>{values.temperature_2m.toFixed(0)} {units.temperature_2m}</span>
                </div>
                <div className={`${styles.infoBlock} w-[250px]`}>
                    <span>Погодные условия</span>
                    <span className={styles.values}>{weatherCode.find(el=>el.code===values.weathercode)?.name}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Влажность:</span>
                    <span className={styles.values}>{values.relativehumidity_2m.toFixed(0)} {units.relativehumidity_2m}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Скорость ветра:</span>
                    <span className={styles.values}>{values.windspeed_10m.toFixed(0)} {units.windspeed_10m}</span>
                </div>
            </div>
        </div>
    );
};