import './App.css'
import { MainFilms } from './components/mainFilms'
import { Route, Routes } from 'react-router-dom'
import { FavoritesFilms } from './components/FavoritesFilms'
import { FilmPage } from './components/FilmPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainFilms />} />
        <Route path="/favorites" element={<FavoritesFilms />} />
        <Route path="/:id" element={<FilmPage />} />
      </Routes>
    </>
  )
}

export default App
