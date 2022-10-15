import React, {useMemo} from 'react';
import {DailyCard} from "../../features/more/dailyCard";
import {chunkWeather} from "../../shared/utils/obj.utils";
import {IResponseWeather} from "../../interface";

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
        <div className={'bg-gray-200 py-[40px] flex flex-col  px-[10px] gap-[30px] min-w-screen min-h-screen  '}>
                  <h1 className={'text-[30px] self-center font-bold text-center'}>Укажите нужный вам город и получите нужную вам погоду в этом городе </h1>
                  <input  value={searchValue} className={'p-[10px] rounded-[20px] border border-gray-400 w-3/5  self-center outline-blue-700 outline-[3px] focus:shadow-blue-200-400 focus:shadow-2xl text-[17px]'} placeholder={'Введите нужный город'} onChange={(event)=>{onChangeInput(event.target.value)}}/>
                  {city&&<span className={'text-[20px] font-[600] '}>Найденный город:<span className={'text-[25px] font-bold capitalize'}> {city}</span> </span>}
                  {error
                      ? <span className={'text-red-500 text-[30px] text-center font-bold'}>{error}</span>
                      : isLoading
                          ?<span className={'text-[30px] text-center font-bold'}>Идет загрузка данных...</span>
                          :<div className={'flex flex-col gap-[20px]'}>
                                {memoWeather.map((el, index) => <DailyCard data={el} key={index}/>)}
                          </div>
                  }
        </div>



    );
};