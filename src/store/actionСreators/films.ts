import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFilms = createAsyncThunk(
    'films/fetchAll',
    async(title: string = '', thunkAPI) => {
        try {
            const response = await axios.get(getFilmsUrl(title))

        if(response.data.Response === 'False') return thunkAPI.rejectWithValue(response.data.Error)

        return response.data.Search

        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)

function getFilmsUrl(title:string) {

    return `https://www.omdbapi.com/?i=tt3896198&apikey=f1dd0baf&s=${title}`
}