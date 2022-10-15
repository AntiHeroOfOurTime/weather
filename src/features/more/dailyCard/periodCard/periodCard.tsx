import React from 'react';
import {Block} from "./block";
import {IResponseWeather} from "../../../../interface";

interface IProps {
        title:string;
        data:IResponseWeather['hourly']
}

export const PeriodCard = ({title, data}: IProps) => {
    return (
        <div className={'flex flex-col gap-[10px]'}>
            <span className={'text-center text-[20px] font-bold '}>{title}</span>
            <div className={'grid gap-10px grid-cols-4 gap-[10px]'}>
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