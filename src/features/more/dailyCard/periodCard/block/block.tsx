import React from 'react';
import {weatherCode} from "shared/constants";
import {IHourlyWeather} from "shared/interface";
import {useSelector} from "react-redux";
import {RootState} from "store/store";
import styles from './styles.module.css'


export const Block = ({time, weathercode, temperature_2m, windspeed_10m, relativehumidity_2m, winddirection_10m}: IHourlyWeather) => {
    const date = new Date(time).toLocaleTimeString()
    const units = useSelector((state:RootState)=>state.more.weather.hourly_units)
    return (
        <div className={styles.container}>
            <span className={styles.time}>на {date.slice(0,5)}</span>
            <div className={styles.infoBlock}>
                <span >Температура : </span>
                <span className={styles.value}>{temperature_2m.toFixed(0)} {units.temperature_2m}</span>
            </div>
            <div className={styles.infoBlock}>
                <span>Погодные условия: </span>
                <span className={styles.value}>{weatherCode.find(el=>el.code===weathercode)?.name}</span>
            </div>
            <div className={styles.infoBlock}>
                <span>Влажность:</span>
                <span className={styles.value}>{relativehumidity_2m}{units.relativehumidity_2m}</span>
            </div>
            <div className={styles.infoBlock}>
                <span>Скорость ветра:</span>
                <span className={styles.value}>{windspeed_10m}{units.windspeed_10m}</span>
            </div>
            <div className={styles.infoBlock}>
                <span>Направление ветра:</span>
                <span className={styles.value}>{winddirection_10m}{units.winddirection_10m}</span>
            </div>

        </div>
    );
};