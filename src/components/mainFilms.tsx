import { useState } from "react"
import { FilmsList } from './filmsList'
import { useAppDispatch } from "../hooks/redux"
import { fetchFilms } from '../store/actionСreators/films'
import { Header } from "./header"

export const MainFilms: React.FC = () => {

    const dispatch = useAppDispatch()

    const submitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(fetchFilms(textValue))
    }

    const [textValue, setTextValue] = useState('');

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value)
    }

    return (
        <>
            <Header>
                <div className="d4">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Искать здесь..." value={textValue} onChange={inputHandler}/>
                        <button type="submit"></button>
                    </form>
                </div>
            </Header>

            <FilmsList />
        </>
    )
}