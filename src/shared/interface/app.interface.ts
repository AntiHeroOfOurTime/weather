export interface ICoordinates {
    latitude:number,
    longitude:number,
}
export interface IHourlyWeather {
    relativehumidity_2m:number;
    temperature_2m:number;
    time:string;
    weathercode:number;
    winddirection_10m?:number;
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
export interface IMorePageStateType {
    city:string;
    weather:IResponseWeather;
    isLoading:boolean;
    error:string;
}
export interface IResponseWeather {
    daily: {
        precipitation_sum: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        time: string[]
        weathercode: number[]
        winddirection_10m_dominant: number[]
        windspeed_10m_max:number[]
    }
    daily_units: {
        precipitation_sum: string
        temperature_2m_max: string
        temperature_2m_min: string
        time: string
        weathercode: string
        winddirection_10m_dominant: string
        windspeed_10m_max: string
    }
    hourly:{
        relativehumidity_2m:number[];
        temperature_2m:number[];
        time:string[];
        weathercode:number[];
        winddirection_10m:number[];
        windspeed_10m:number[];
    }
    hourly_units: {
        time: string,
        relativehumidity_2m:string,
        temperature_2m: string,
        weathercode:string,
        winddirection_10m:string,
        windspeed_10m:string
    }
}
export interface IMainStateType {
    defaultCity:string;
    defaultCoordinates:ICoordinates;
    isLoading:boolean;
    error:string
    weather:IResponseWeather
}
export enum LOCAL_STORAGE_KEYS{
    CITY= 'defaultCity',
    COORDINATES = 'defaultCoordinates'
}
export interface IResponseCoordinate {
    results:{
        latitude:number;
        longitude:number
        name:string;}[]
}
