import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICoordinates, IMainStateType, IResponseWeather, LOCAL_STORAGE_KEYS} from "shared/interface/app.interface";
import {AppApi} from "api/app.api";
import {setValueInStorage} from "shared/utils/localStorage.utils";

//санка для получения данных о наименовании населенного пункта
export const getNameByCoordinates = createAsyncThunk(
    "main/getNameByCoordinates",
    async (coordinates:ICoordinates, { dispatch }) => {
        dispatch(setIsLoadingMain(true))
        try {
            const response = await AppApi.getNameByCoordinates(coordinates);
            dispatch(getWeatherForMain(response.locality))
        } catch (e:any) {
            setErrorMain('ошибка получения имени')
        }finally{
            dispatch(setIsLoadingMain(false))
        }
    }
)
//санка для получения данных о погоде
export const getWeatherForMain = createAsyncThunk(
    "main/getWeather",
    async (city:string, { dispatch }) => {
        dispatch(setIsLoadingMain(true))
        try {
            dispatch(setErrorMain(''))
            const responseCoordinate = await AppApi.getCoordinatesByName(city);
            if(!responseCoordinate?.results) throw new Error('Ничего не найдено по данному названию')
            dispatch(setDefaultValue({city:responseCoordinate.results[0].name, coordinates:{latitude:responseCoordinate.results[0].latitude, longitude:responseCoordinate.results[0].longitude}} ))
            const responseWeather = await AppApi.getWeather(
                {latitude:responseCoordinate.results[0].latitude,
                        longitude:responseCoordinate.results[0].longitude},
                'daily'
                );
             dispatch(setWeatherForMain(responseWeather))
        } catch (e:any) {
            if (!e?.data?.error) dispatch(setErrorMain(e.message))
            else dispatch(setErrorMain('Произошла ошибка при получении данных'))
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
    weather:{} as IResponseWeather
}
export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setDefaultValue: (state, action: PayloadAction<{city:string, coordinates:ICoordinates}>) => {
            state.defaultCity = action.payload.city
            state.defaultCoordinates = action.payload.coordinates
            setValueInStorage([LOCAL_STORAGE_KEYS.CITY, LOCAL_STORAGE_KEYS.COORDINATES],[action.payload.city,action.payload.coordinates])
        },
        setIsLoadingMain:(state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setErrorMain:(state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setWeatherForMain: (state, action:PayloadAction<IResponseWeather>) => {
            state.weather = action.payload
        },
    },
})
export const {setDefaultValue, setErrorMain, setIsLoadingMain, setWeatherForMain} = mainSlice.actions