import axios from "axios";
import {ICoordinates, IResponseWeather} from "../interface";




axios.interceptors.response.use( (response) => {
    return response.data;
},  (error) => {
    return Promise.reject(error.response);
});
export class ApiMore {
    static async getCoordinatesByName(name:string): Promise<any> {
        return axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`);
    }
    static async getWeather(data:ICoordinates):Promise<IResponseWeather>{
        return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&hourly=temperature_2m,weathercode,relativehumidity_2m,windspeed_10m,winddirection_10m`);
    }
    static async getWeatherForMain(data:ICoordinates):Promise<IResponseWeather>{
        const nowData = new Date()
        const threeData = new Date(nowData.getTime() + 2 * 24 * 3600 * 1000)
        return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto&start_date=${nowData.toLocaleDateString('sv-AX')}&end_date=${threeData.toLocaleDateString('sv-AX')}`);
    }
    static async getNameByCoordinates(data:ICoordinates):Promise<any>{
        return axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${data.latitude}&longitude=${data.longitude}`)}

}