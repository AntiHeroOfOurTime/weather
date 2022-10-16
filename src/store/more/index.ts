import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppApi} from "api/app.api";
import {IMorePageStateType, IResponseWeather} from "shared/interface";

const initialState:IMorePageStateType = {
    city:'',
    weather: {} as IResponseWeather,
    isLoading:false,
    error:''
}

//запрос на получение данных о погоде
export const getWeather = createAsyncThunk(
    "more/getWeather",
    async (city:string, { dispatch }) => {
        dispatch(setIsLoading(true))
        try {
            dispatch(setError(''))
            const responseCoordinate = await AppApi.getCoordinatesByName(city);//запрос
            // если город не найден прийдет ответ со статусом 200 но с пустым результатом тогда мы пробрасываем ошибку
            if(!responseCoordinate?.results) throw new Error('Ничего не найдено по данному названию')
            dispatch(setCurrentCity(responseCoordinate.results[0].name))
            const responseWeather = await AppApi.getWeather(
                {latitude:responseCoordinate.results[0].latitude,
                        longitude:responseCoordinate.results[0].longitude},
                'hourly'
            );
            dispatch(setWeather(responseWeather))
        } catch (e:any) {
            if (!e?.data?.error) dispatch(setError(e.message))
            else dispatch(setError('Произошла ошибка при получении данных'))
        }finally{
            dispatch(setIsLoading(false));
        }
    }
)
export const moreSlice = createSlice({
    name: 'more',
    initialState,
    reducers: {
        setCurrentCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
        },
        setWeather: (state, action: PayloadAction<IResponseWeather>) => {
            state.weather = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.weather = {} as IResponseWeather
            state.city = ''
        },
    },
})
export  const {setError, setIsLoading, setWeather, setCurrentCity} = moreSlice.actions