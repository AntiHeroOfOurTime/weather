import React from 'react';
import {weatherCode} from "../../../../../constants";
import {IHourlyWeather} from "../../../../../interface";


export const Block = ({time, weathercode, temperature_2m, windspeed_10m, relativehumidity_2m, winddirection_10m}: IHourlyWeather) => {
    const date = new Date(time).toLocaleTimeString()
    return (
        <div className={'flex flex-col border border-gray-400 bg-gray-100 p-[15px] rounded-[15px]'}>
            <span className={'text-center font-bold text-[17px] pb-[10px] border-b border-gray-400'}>на {date.slice(0,5)}</span>
            <div className={'flex justify-between text-[15px]'}>
                <span className={''}>Температура : </span>
                <span className={' font-bold'}>{temperature_2m.toFixed(0)} °C</span>
            </div>
            <div className={'flex justify-between text-[15px] '}>
                <span>Погодные условия: </span>
                <span className={' font-bold text-end '}>{weatherCode.find(el=>el.code===weathercode)?.name}</span>
            </div>
            <div className={'flex justify-between text-[15px] '}>
                <span>Влажность:</span>
                <span className={' font-bold'}>{relativehumidity_2m}%</span>
            </div>
            <div className={'flex justify-between text-[15px]'}>
                <span>Скорость ветра:</span>
                <span className={' font-bold'}>{windspeed_10m}°C</span>
            </div>
            <div className={'flex justify-between text-[15px]'}>
                <span>Направление ветра:</span>
                <span className={' font-bold'}>{winddirection_10m}°</span>
            </div>

        </div>
    );
};