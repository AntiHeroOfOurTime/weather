import React from 'react';
import {Block} from "./block";
import {IResponseWeather} from "shared/interface";
import styles from './styles.module.css'

interface IProps {
        title:string;
        data:IResponseWeather['hourly']
}

export const PeriodCard = ({title, data}: IProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <div className={styles.blocks}>
                {data.time.map((el, index)=><Block
                    key={index}
                    weathercode={data.weathercode[index]}
                    time={el}
                    relativehumidity_2m={data.relativehumidity_2m[index]}
                    temperature_2m={data.temperature_2m[index]}
                    winddirection_10m={data.winddirection_10m[index]}
                    windspeed_10m={data.windspeed_10m[index]}
                />)}
            </div>

        </div>
    );
};