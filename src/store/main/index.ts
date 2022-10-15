import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICoordinates, IMainStateType, IResponseWeather} from "../../interface";
import {setError} from "../more";
import {ApiMore} from "../api";


export const getNameByCoordinates = createAsyncThunk(
    "main/getNameByCoordinates",
    async (coordinates:ICoordinates, { dispatch }) => {
        try {
            const response = await ApiMore.getNameByCoordinates(coordinates);//запрос
            dispatch(getWeatherForMain(response.locality))
        } catch (e:any) {
            setError('ошибка получения имени')
        }finally{

        }
    }
)

export const getWeatherForMain = createAsyncThunk(
    "main/getWeather",
    async (city:string, { dispatch }) => {
        dispatch(setIsLoadingMain(true))
        try {
            dispatch(setErrorMain(''))
            const responseCoordinate = await ApiMore.getCoordinatesByName(city);
            if(!responseCoordinate?.results) throw new Error('Ничего не найдено по данному названию')
            dispatch(setDefaultValue({city:responseCoordinate.results[0].name, coordinates:{latitude:responseCoordinate.results[0].latitude, longitude:responseCoordinate.results[0].longitude}} ))
            const responseWeather = await ApiMore.getWeatherForMain({latitude:responseCoordinate.results[0].latitude, longitude:responseCoordinate.results[0].longitude});
            dispatch(setWeatherForMain(responseWeather.daily))
        } catch (e:any) {
            if (!e?.data?.error) dispatch(setError(e.message))
            else dispatch(setError('Произошла ошибка при получении данных'))
        }finally{
            dispatch(setIsLoadingMain(false));
        }
    }
)

const initialState:IMainStateType = {
    defaultCity:'',
    defaultCoordinates:{} as ICoordinates,
    isLoading:false,
    error:'',
    weather:{} as IResponseWeather['daily']
}
export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setDefaultValue: (state, action: PayloadAction<{city:string, coordinates:ICoordinates}>) => {
            state.defaultCity = action.payload.city
            state.defaultCoordinates = action.payload.coordinates
            localStorage.setItem('defaultCity', action.payload.city)
            localStorage.setItem('defaultCoordinates', JSON.stringify(action.payload.coordinates))
        },
        setIsLoadingMain:(state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setErrorMain:(state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setWeatherForMain:(state, action: PayloadAction<IResponseWeather['daily']>) => {
            state.weather = action.payload
        },
    },
})
export const {setDefaultValue, setErrorMain, setIsLoadingMain, setWeatherForMain} = mainSlice.actions