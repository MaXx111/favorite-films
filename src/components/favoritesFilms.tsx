import { useAppSelector } from '../hooks/redux'
import { FilmItem } from './filmItem'
import { Header } from './header';

export const FavoritesFilms: React.FC = () => {

    const { favorites } = useAppSelector(state => state.favoriteFilmsReducer);

    return (
        <>
            <Header>
            </Header>

            <div className="films-wrapper">
                    {favorites.map(item => <FilmItem key={item.imdbID} film={item} />)}
            </div>
        </>
    )
}