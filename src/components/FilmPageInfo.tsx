import { IDetailedFilm } from "../model/IDetailedFilm"
import { Header } from "./header"

interface FilmPageInfoProps {
    film: IDetailedFilm
}

export const FilmPageInfo: React.FC<FilmPageInfoProps> = (film) => {

    return(
        <>
        <Header>
        </Header>
        <div className="films-wrapper detailed-film">
            <img src={film.film.Poster} alt="fiml" className="detailed-film_img"/>
            <div className="detailed-film_info">
                <h2 className="detailed-film_title">{film.film.Title}</h2>
                <hr/>
                <p className="detailed-film_txt">{film.film.Year}</p>
                <hr/>
                <p className="detailed-film_txt">{film.film.Genre}</p>
                <hr/>
                <p className="detailed-film_txt">{film.film.Runtime}</p>
                <hr/>
                <p className="detailed-film_txt">{film.film.Director}</p>
                <hr/>
                <p className="detailed-film_txt">{film.film.Actors}</p>
                <hr/>
                <p className="detailed-film_txt">{film.film.imdbRating}</p>
            </div>
        </div>
        </>
    )
}