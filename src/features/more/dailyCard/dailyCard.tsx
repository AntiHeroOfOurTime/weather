import React, {useMemo, useState} from 'react';
import {PeriodCard} from "./periodCard";
import {IHourlyWeather, IResponseWeather} from "../../../interface";
import {DayCard} from "./DayCard";
import {chunkWeather} from "../../../shared/utils/obj.utils";

interface IProps {
        data:IResponseWeather['hourly']
}

export const DailyCard = ({data}: IProps) => {
    const [focus,setFocus] = useState(false)
    const calculateAverageValueInArr = (arr:number[]) =>{
       return  arr.reduce((previousValue, currentValue) => previousValue + currentValue,0) / arr.length
    }
    const memoData = useMemo(()=>chunkWeather(data,12),[data])
    return (
        <div className={'bg-white w-full rounded-[15px] p-[20px] overflow-y-hidden flex flex-col gap-[20px] cursor-pointer'} onClick={()=>setFocus(prevState => !prevState)}>
            <DayCard time={data.time[0]} values={{
                time:'',
                weathercode:Math.max.apply(null, data.weathercode),
                temperature_2m:calculateAverageValueInArr(data.temperature_2m),
                windspeed_10m:calculateAverageValueInArr(data.windspeed_10m),
                relativehumidity_2m:calculateAverageValueInArr(data.relativehumidity_2m),
                winddirection_10m:1,
            } as IHourlyWeather}/>
            <div className={`hidden ${focus&& '!flex' } flex-col transition-all transition-transform gap-[20px]`}>
                <PeriodCard title={'Погода в первой половине дня'} data={memoData[0]}/>
                <PeriodCard title={'Погода во второй половине дня'} data={memoData[1]}/>
            </div>

        </div>
    );
};