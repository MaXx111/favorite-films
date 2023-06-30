import { createSlice } from "@reduxjs/toolkit"
import { fetchDetailedFilm } from "../actionСreators/detailedFilmAction"
import { IDetailedFilm } from "../../model/IDetailedFilm"

interface detailedFilmProps {
    loading: boolean,
    error: null | string,
    detailedFilm: IDetailedFilm
}

const initialState: detailedFilmProps = {
    loading: false,
    error: null,
    detailedFilm: {
        Poster: '',
        Title: '',
        Year: '',
        Genre: '',
        Runtime: '',
        Director: '',
        Actors: '',
        imdbRating: ''
    }
}

export const detailedFilmSlice = createSlice({
    name: 'detailedFilm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDetailedFilm.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchDetailedFilm.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.detailedFilm = action.payload
        })
        .addCase(fetchDetailedFilm.rejected, (state, action) => {
            state.loading = false,
            state.error = String(action.payload)
        })
    }
})

export default detailedFilmSlice.reducer