import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchDetailedFilm } from "../store/actionСreators/detailedFilmAction";
import { Loader } from "./loader";
import { FilmPageInfo } from "./FilmPageInfo";


export const FilmPage: React.FC = () => {

    const params = useParams();
    const dispatch = useAppDispatch();

    const { detailedFilm, error, loading } = useAppSelector(state => state.detailedFilmReducer)

    useEffect(() =>{
        dispatch(fetchDetailedFilm(params.id!))
    },[])

    return(
        <>
            {loading && <Loader />}

            {!loading && error && 
                <h1 className="error">{error}</h1>
            }
            
            {!loading && !error && 
                <FilmPageInfo film={detailedFilm} />
            }
        </>
    )
}