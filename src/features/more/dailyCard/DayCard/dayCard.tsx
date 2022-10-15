import React from 'react';
import {IHourlyWeather} from "../../../../interface";
import {weatherCode} from "../../../../constants";

interface IProps {
    time:string
    values:IHourlyWeather;


}

export const DayCard = ({time,values}: IProps) => {
    const date = new Date(time).toLocaleDateString()
    return (
        <div className={'border border-cyan-600 rounded-[10px] text-[20px] p-[10px] '}>
            <h3 className={'text-center mb-[10px] font-bold'}>Среднии показатели за {`${date} `}</h3>

            <div className={'flex justify-between'}>
                <div className={'stroke-blue-600'}>{weatherCode.find(el=>el.code === values?.weathercode)?.icon}</div>
                <div className={'flex flex-col items-center'}>
                    <span className={'text-[15px]'}>Температура:</span>
                    <span className={'text-[20px] font-bold'}>{values.temperature_2m.toFixed(0)} °C</span>
                </div>
                <div className={'flex flex-col items-center w-[250px]'}>
                    <span className={'text-[15px]'}>Погодные условия</span>
                    <span className={'text-[20px] font-bold'}>{weatherCode.find(el=>el.code===values.weathercode)?.name}</span>
                </div>
                <div className={'flex flex-col items-center'}>
                    <span className={'text-[15px]'}>Влажность:</span>
                    <span className={'text-[20px] font-bold'}>{values.relativehumidity_2m.toFixed(0)} %</span>
                </div>
                <div className={'flex flex-col items-center'}>
                    <span className={'text-[15px]'}>Скорость ветра:</span>
                    <span className={'text-[20px] font-bold'}>{values.windspeed_10m.toFixed(0)} км/ч</span>
                </div>
            </div>
        </div>
    );
};