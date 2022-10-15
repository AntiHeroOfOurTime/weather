import React from 'react';
import {IDailyWeather} from "../../../interface";
import {weatherCode} from "../../../constants";

export const Card = (values: IDailyWeather) => {
    return (
        <div className={'flex flex-col bg-white '} >
            <span>Погода на {values.time}</span>
            <div>
                <div>{weatherCode.find(el=>el.code === values.weathercode)?.icon}</div>
                <div>
                    <span>Максимальная температура</span>
                    <span>{values.temperature_2m_max}</span>
                </div>
                <div>
                    <span>Минимальная температура</span>
                    <span>{values.temperature_2m_min}</span>
                </div>
                <div>
                    <span>Сумма дневных осадков </span>
                    <span>{values.precipitation_sum}</span>
                </div>
                <div>
                    <span>Погодные условия</span>
                    <span>{weatherCode.find(el=>el.code === values.weathercode)?.name}</span>
                </div>
                <div>
                    <span>Напрвление ветра</span>
                    <span>{values.winddirection_10m_dominant}</span>
                </div>
                <div>
                    <span>Максимальная скорость ветра</span>
                    <span>{values.windspeed_10m_max} км/ч</span>
                </div>
            </div>

        </div>
    );
};