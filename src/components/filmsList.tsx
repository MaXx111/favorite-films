import { useAppSelector } from "../hooks/redux"
import { FilmItem } from "./filmItem"
import { Loader } from "./loader"



export const FilmsList: React.FC = () => {

    const {films, loading, error} = useAppSelector(state => state.filmsReducer)

    return (
        <>
            <div className="films-wrapper">
                {loading && <Loader />}
                {!loading && error && 
                    <h1 className="error">{error}</h1>
                }
                {!loading && !error &&
                    films.map(item => <FilmItem key={item.imdbID} film={item} />)
                }
            </div>
        </>
    )
}