import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDetailedFilm = createAsyncThunk(
    'film/fetchDetailed',
    async (id:string, thunkAPI) => {
        try {
            const response = await axios.get(getUrl(id))

            if(response.data.Response == 'False') return thunkAPI.rejectWithValue(response.data.Error)

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузке')
        }
    }
)

function getUrl(id:string) {
    return `https://www.omdbapi.com/?apikey=f1dd0baf&i=${id}`
}