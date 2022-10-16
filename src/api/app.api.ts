import axios from "axios";
import {ICoordinates, IResponseCoordinate,IResponseWeather } from "shared/interface";
import {REQUEST_PARAMS} from "shared/constants";

axios.interceptors.response.use( (response) => {
    return response.data;
},  (error) => {
    return Promise.reject(error.response);
});

export class AppApi {
    static async getCoordinatesByName(name:string): Promise<IResponseCoordinate> {
        return axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`);
    }
    static async getWeather(params:ICoordinates,periodicity:'hourly'|'daily'):Promise<IResponseWeather>{

        return axios.get(`https://api.open-meteo.com/v1/forecast`, {params:{...params, ...REQUEST_PARAMS[periodicity]}});
    }
    static async getNameByCoordinates(data:ICoordinates):Promise<any>{
        return axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${data.latitude}&longitude=${data.longitude}`)}

}