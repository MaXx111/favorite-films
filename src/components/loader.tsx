import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Loader: React.FC = () => {

    return (
        <>
            <FontAwesomeIcon className="loader" icon={faSpinner} spin size="2xl" style={{color: "#f98017",}} />
        </>
    )
}