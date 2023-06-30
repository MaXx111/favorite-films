import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import filmsReducer from './reducers/filmsSlice'
import favoriteFilmsReducer from './reducers/favoriteFilmsReducer'
import detailedFilmReducer from './reducers/detailedfilmSlice'

export const rootReducer = combineReducers({
    filmsReducer,
    favoriteFilmsReducer,
    detailedFilmReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']