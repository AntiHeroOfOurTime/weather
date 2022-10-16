import {ICoordinates, IResponseWeather} from "shared/interface";

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
//функция для рассчитывания средних значений в массиве
export const calculateAverageValueInArr = (arr:number[]) =>{
    return  arr.reduce((previousValue, currentValue) => previousValue + currentValue,0) / arr.length
}

//функция для получения сегоднешней даты и даты окончания в пропсах указываем через сколко дней конец даты
export const getStartAndEndDate = (countDay:number=2) =>{
    const startDate = new Date()
    const endDate = new Date(startDate.getTime() + countDay * 24 * 3600 * 1000)
    return {startDate:startDate.toLocaleDateString('sv-AX'), endDate:endDate.toLocaleDateString('sv-AX')}
}

//функция для получения геолокации пользователя принимает в себя 2 callbacks первый срабатывает когда ползователь разрешил геолокацию второй когда отклонил
export const getPosition =  (resolve:(coordinates:ICoordinates)=>void,reject:()=>void ) =>{
    navigator.geolocation.getCurrentPosition((location)=> {
        //если пользователь разрешает получеие локации то возращаем координыаты
        resolve({latitude:location.coords.latitude,
            longitude:location.coords.longitude}
        )

    },()=>reject())
}

