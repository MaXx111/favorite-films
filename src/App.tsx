import './App.css'
import { MainFilms } from './components/mainFilms'
import { Route, Routes } from 'react-router-dom'
import { FavoritesFilms } from './components/favoritesFilms'
import { FilmPage } from './components/FilmPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/favorite-films/" element={<MainFilms />} />
        <Route path="/favorite-films/favorites" element={<FavoritesFilms />} />
        <Route path="/favorite-films/:id" element={<FilmPage />} />
      </Routes>
    </>
  )
}

export default App
