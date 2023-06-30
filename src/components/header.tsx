import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from "../hooks/redux";
import { ReactNode } from "react";

interface childrenProps {
    children: ReactNode
}

export const Header: React.FC<childrenProps> = ({children}) => {

    const {count, } = useAppSelector(state => state.favoriteFilmsReducer);

    return(
        <>
            <div className="header">
                <NavLink to='/favorite-films/' className="main-link">
                    Главная
                </NavLink>

                {children}

                <NavLink to='/favorite-films/favorites' className="favorite">
                    <h2 className="favorite-title">Избранное</h2>
                    <FontAwesomeIcon icon={faHeart} style={{color: "#311c24",}} size="2xl" />
                    <span className="favorite-count">{count}</span>
                </NavLink>
            </div>
        </>
    )
}