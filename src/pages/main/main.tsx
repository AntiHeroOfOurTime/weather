import React from 'react';
import {IResponseWeather} from "../../interface";
import {Card} from "../../features/main/dailyCard/card";
import {dispatch} from "../../store/store";
import {getWeatherForMain} from "../../store/main";
import {useNavigate} from "react-router-dom";

interface IProps {
    weather:IResponseWeather['daily']
    isLoading:boolean;
    city:string;
    error:string;
}

export const Main = ({weather, isLoading, city, error}: IProps) => {
    const navigate = useNavigate()
    const onClick = (name:string) =>{
        dispatch(getWeatherForMain(name))
    }
    console.log(weather)
    return <div className={''}>
                <div>
                    <button onClick={()=>onClick('Moscow')}>Москва</button>
                    <button onClick={()=>onClick('Minsk')}>Минск</button>
                    <button onClick={()=>onClick('Bratislava')}>Братислава</button>
                </div>
                <h1>Выбранный город: {city}</h1>
                {isLoading
                    ?<span>Идет загрузка ...</span>
                    :error
                        ?<span>{error}</span>
                        :<div className={'flex justify-between'}>
                            {weather?.time?.map((el,index)=>
                                <Card key={el}  time={el}
                                       precipitation_sum={weather.precipitation_sum[index]}
                                       temperature_2m_max={weather.temperature_2m_max[index]}
                                       temperature_2m_min={weather.temperature_2m_min[index]}
                                       weathercode={weather.weathercode[index]}
                                       winddirection_10m_dominant={weather.winddirection_10m_dominant[index]}
                                       windspeed_10m_max={weather.windspeed_10m_max[index]}
                               />)}
                         </div>
                }
                <button onClick={()=>navigate('more?search=Milan')}>Подробнее о погоде в Милане</button>
           </div>
};