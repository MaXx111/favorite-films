import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IFilmItem } from "../model/IFilmItem"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { favoriteFilmsSlice } from "../store/reducers/favoriteFilmsReducer"
import { useNavigate } from "react-router-dom"

interface FilmItemProps{
    film?: IFilmItem
}

export const FilmItem: React.FC<{film: IFilmItem}> = (film: FilmItemProps) => {

    const dispatch = useAppDispatch();

    const { favorites } = useAppSelector(state => state.favoriteFilmsReducer)

    const buttonHandlerFavorite = (film:IFilmItem) => {
        let present = false;

        favorites.map(item => {
            if(item.imdbID == film.imdbID) {
                present = true;
                dispatch(favoriteFilmsSlice.actions.removeFilm(film.imdbID))
            }
        })

        if(!present) {
            dispatch(favoriteFilmsSlice.actions.addFilm(film))
        }
    }

    const navigate = useNavigate()

    const buttonHandlerdetailed = (id: string) => {
        navigate(`/${id}`);
    }

    return(
        <>
            <article className="film">
                <img src={film.film?.Poster} alt="" className="film-img"/>
                <h2 className="film-title">{film.film?.Title}</h2>
                <span className="film-info">{film.film?.Year}</span>
                <button className="film-btn" onClick={() => buttonHandlerdetailed(film.film?.imdbID!)}><span className='film-btn-txt'>Подробнее</span></button>
                <FontAwesomeIcon className="film-btn-favorite" size="5x" icon={faHeart} onClick={() => buttonHandlerFavorite(film.film!)} style={{color: "#ff0000",}} />
            </article>
        </>
    )
}