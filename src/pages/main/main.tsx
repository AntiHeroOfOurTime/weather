import React from 'react';
import {IResponseWeather} from "shared/interface";
import {DailyCard} from "features/main";
import {useNavigate} from "react-router-dom";
import styles from './styles.module.css'
import {ROUTES} from "shared/constants";

interface IProps {
    weather:IResponseWeather['daily']
    isLoading:boolean;
    city:string;
    error:string;
    onClickButton:(name:string)=>void;
}

export const Main = ({weather, isLoading, city, error, onClickButton}: IProps) => {
    const navigate = useNavigate()
    return <div className={styles.container}>
                <span className={styles.defaultCity}>Сменить город по умолчанию</span>
                <div className={styles.buttonsCity}>
                    <button  onClick={()=>onClickButton('Moscow')}>Москва</button>
                    <button  onClick={()=>onClickButton('Minsk')}>Минск</button>
                    <button  onClick={()=>onClickButton('Bratislava')}>Братислава</button>
                </div>

                <h1 className={styles.title}>Погода на три дня в городе {city}</h1>
                {isLoading
                    ?<span className={styles.loader}>Идет загрузка ...</span>
                    :error
                        ?<span className={styles.error}>{error}</span>
                        :<div className={styles.cards}>
                            {weather?.time?.map((el,index)=>
                                <DailyCard key={el} time={el}
                                           precipitation_sum={weather.precipitation_sum[index]}
                                           temperature_2m_max={weather.temperature_2m_max[index]}
                                           temperature_2m_min={weather.temperature_2m_min[index]}
                                           weathercode={weather.weathercode[index]}
                                           winddirection_10m_dominant={weather.winddirection_10m_dominant[index]}
                                           windspeed_10m_max={weather.windspeed_10m_max[index]}
                               />)}
                         </div>
                }
                <button
                    className={styles.button}
                    onClick={()=>navigate(`${ROUTES.MORE}?search=milan`)}
                >
                    Подробнее о погоде в Милане
                </button>
           </div>
};
