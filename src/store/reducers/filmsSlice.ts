import { createSlice} from "@reduxjs/toolkit";
import { IFilmItem } from "../../model/IFilmItem";
import { fetchFilms } from "../actionСreators/films";

interface initialStateProps {
    films: IFilmItem[],
    loading: boolean,
    error: string | null
}

const initialState = {
    films: [],
    loading: false,
    error: null
} as initialStateProps

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false,
                state.error = null,
                state.films = action.payload
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false,
                state.error = String(action.payload)
            })
    }
})

export default filmsSlice.reducer