export interface IHourlyWeather {
    relativehumidity_2m:number;
    temperature_2m:number;
    time:string;
    weathercode:number;
    winddirection_10m:number;
    windspeed_10m:number;
}
export interface IDailyWeather {
    precipitation_sum: number
    temperature_2m_max: number
    temperature_2m_min: number
    time: string
    weathercode: number
    winddirection_10m_dominant: number
    windspeed_10m_max:number
}
export interface ICoordinates {
    latitude:string,
    longitude:string,
}

export interface IMorePageStateType {
    city:string;
    weather:IResponseWeather["hourly"];
    isLoading:boolean;
    error:string;
}
export interface IResponseWeather {
    hourly:{
        relativehumidity_2m:number[];
        temperature_2m:number[];
        time:string[];
        weathercode:number[];
        winddirection_10m:number[];
        windspeed_10m:number[];
    }
    daily: {
        precipitation_sum: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        time: string[]
        weathercode: number[]
        winddirection_10m_dominant: number[]
        windspeed_10m_max:number[]
    }
}
export interface IMainStateType {
    defaultCity:string;
    defaultCoordinates:ICoordinates;
    isLoading:boolean;
    error:string
    weather:IResponseWeather['daily']
}