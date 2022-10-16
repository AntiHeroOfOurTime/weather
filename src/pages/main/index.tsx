import React, {useEffect} from 'react';
import {Main} from "./main";
import {useSelector} from "react-redux";
import {dispatch, RootState} from "store/store";
import {getNameByCoordinates, getWeatherForMain} from "store/main";
import {getValueFromStorage, getPosition} from "shared/utils";
import {LOCAL_STORAGE_KEYS} from "shared/interface";
import {DEFAULT_CITY} from "shared/constants";

export const MainPage = () => {
    const {weather, defaultCity, isLoading, error} = useSelector((state:RootState)=>state.main)

    useEffect(()=>{
        //если дефолтные значения отсуствуют запрашиваем данные по координатам
        if(!getValueFromStorage(LOCAL_STORAGE_KEYS.CITY)){
            //функция для определения координат
           getPosition(
                (coordinates)=>{dispatch(getNameByCoordinates(coordinates))}, // если геолокация разрешена то получем координаты
                ()=>{dispatch(getWeatherForMain(DEFAULT_CITY)) }//если геолокация запрещена то устанавливаем город по умолчанию
            )
        }else {
            dispatch(getWeatherForMain(getValueFromStorage(LOCAL_STORAGE_KEYS.CITY)))//запрос с дефолтными значениями
        }
    },[])

    const onClickButton = (name:string) =>{
        dispatch(getWeatherForMain(name))
    }

    return <Main
                weather={weather.daily}
                city={defaultCity}
                error={error}
                isLoading={isLoading}
                onClickButton={onClickButton}
            />
};