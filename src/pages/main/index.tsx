import React, {useEffect} from 'react';
import {Main} from "./main";
import {useSelector} from "react-redux";
import {dispatch, RootState} from "../../store/store";
import {getNameByCoordinates, getWeatherForMain} from "../../store/main";

export const MainPage = () => {
    const {weather, defaultCity, isLoading, error} = useSelector((state:RootState)=>state.main)
    useEffect(()=>{
        if(!localStorage.getItem('defaultCity')){
            navigator.geolocation.getCurrentPosition((location)=>{
                dispatch(getNameByCoordinates({latitude:location.coords.latitude.toString(), longitude:location.coords.longitude.toString()}))
            }, ()=>{
                dispatch(getWeatherForMain('Minsk'))
            })
        }else {
            dispatch(getWeatherForMain(localStorage.getItem('defaultCity')||''))
        }
    },[])
    return <Main weather={weather} city={defaultCity} error={error} isLoading={isLoading}/>
};