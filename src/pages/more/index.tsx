import React, {useEffect} from 'react';
import {More} from "./more";
import {useSearchParams} from "react-router-dom";
import {dispatch, RootState,} from "../../store/store";
import {getWeather} from "../../store/more";
import {useSelector} from "react-redux";
import {useDebounce} from "../../shared/hooks/useDebounce";


export const MorePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const debounce = useDebounce(searchParams.get('search')||'', 2000)
    const { city,isLoading, error, weather} = useSelector((state:RootState)=>state.more)
    useEffect(()=>{
           dispatch(getWeather(searchParams.get('search')||''))
    },[debounce])
    const onChangeInput = (value:string) =>{
        setSearchParams(`search=${value}`)
    }

    return (
        <More isLoading={isLoading} error={error} city={city} weather={weather} searchValue={searchParams.get('search')||''} onChangeInput={onChangeInput}/>
    );
};