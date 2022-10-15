import {IResponseWeather} from "../../interface";

//эта функция для преобразования данных которые приходят с сервера для нужного вида
export const chunkWeather =  (weather:IResponseWeather['hourly'], size:number):IResponseWeather['hourly'][] =>{
    //разбиваем данные о погоде на дни
    //size - сколько элементов в массиве будет
    let dailyWeather:IResponseWeather['hourly'][] = [];
    for (let i = 0; i <Math.ceil(weather?.time?.length/size); i++){
        dailyWeather[i] ={
            relativehumidity_2m:weather.relativehumidity_2m.slice((i*size), (i*size) + size),
            temperature_2m:weather.temperature_2m.slice((i*size), (i*size) + size),
            time:weather.time.slice((i*size), (i*size) + size),
            weathercode:weather.weathercode.slice((i*size), (i*size) + size),
            winddirection_10m:weather.winddirection_10m.slice((i*size), (i*size) + size),
            windspeed_10m:weather.windspeed_10m.slice((i*size), (i*size) + size),
        }
    }
    return dailyWeather
}