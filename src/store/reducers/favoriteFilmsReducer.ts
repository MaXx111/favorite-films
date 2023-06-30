import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilmItem } from "../../model/IFilmItem";

interface favoriteFilmsProps {
    count: number,
    favorites: IFilmItem[]
}

const initialState: favoriteFilmsProps = {
    count: 0,
    favorites: []
} 

export const favoriteFilmsSlice = createSlice({
    name: 'favoriteFilm',
    initialState,
    reducers: {
        addFilm(state, action: PayloadAction<IFilmItem>) {
            state.count = state.count + 1,
            state.favorites.push(action.payload)
        },
        removeFilm(state, action: PayloadAction<string>) {
            state.count = state.count - 1;
            state.favorites = state.favorites.filter(film => film.imdbID !== action.payload)
        }
    }
});

export default favoriteFilmsSlice.reducer