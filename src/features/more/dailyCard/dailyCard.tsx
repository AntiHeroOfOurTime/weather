import React, {useMemo, useState} from 'react';
import {PeriodCard} from "./periodCard";
import {IResponseWeather} from "shared/interface/app.interface";
import {DayCard} from "./dayCard";
import {calculateAverageValueInArr, chunkWeather} from "shared/utils/obj.utils";
import styles from './styles.module.css'

export const DailyCard = (data: IResponseWeather['hourly']) => {
    const [focus,setFocus] = useState(false)
    const memoData = useMemo(()=>chunkWeather(data,12),[data])
    return (
        <div className={styles.container}>
            <DayCard
                time={data.time[0]}
                weathercode={Math.max.apply(null, data.weathercode)}
                temperature_2m={calculateAverageValueInArr(data.temperature_2m)}
                windspeed_10m={calculateAverageValueInArr(data.windspeed_10m)}
                relativehumidity_2m = {calculateAverageValueInArr(data.relativehumidity_2m)}
            />
            <div className={`${styles.sections} ${focus && '!flex'}`}>
                <PeriodCard title={'Погода в первой половине дня'} data={memoData[0]}/>
                <PeriodCard title={'Погода во второй половине дня'} data={memoData[1]}/>
            </div>
            <button onClick={()=>setFocus(prevState => !prevState)}>{focus?'Закрыть':'Подробнее'}</button>

        </div>
    );
};