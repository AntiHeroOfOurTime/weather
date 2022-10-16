import React, {useMemo} from 'react';
import {DailyCard} from "features/more";
import {chunkWeather} from "shared/utils/obj.utils";
import {IResponseWeather} from "shared/interface";
import styles from './styles.module.css'

interface IProps {
    onChangeInput:(value:string)=>void;
    weather:IResponseWeather['hourly']
    searchValue:string;
    isLoading:boolean
    error:string
    city:string

}


export const More = ({onChangeInput, weather, searchValue, error, isLoading, city}: IProps) => {
    const memoWeather = useMemo(()=>chunkWeather(weather,24),[weather])
    return (
        <div className={styles.container}>
                  <h1 className={styles.title}>Укажите нужный вам город и получите нужную вам погоду в этом городе </h1>
                  <input
                      value={searchValue}
                      className={styles.input}
                      placeholder={'Введите нужный город'}
                      onChange={(event)=>{onChangeInput(event.target.value)}}
                  />
                  {city&&<span className={styles.city}>Найденный город: {city}</span>}
                  {error
                      ? <span className={styles.error}>{error}</span>
                      : isLoading
                          ?<span className={styles.loader}>Идет загрузка данных...</span>
                          :<div className={styles.cards}>
                              {memoWeather.map((el, index) => <DailyCard {...el} key={index}/>)}
                          </div>
                  }
        </div>



    );
};