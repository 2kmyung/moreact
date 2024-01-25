import PropTypes from "prop-types";
import {
    Link
} from "react-router-dom";

function Movie({ id, cover, title, genres, summary }) {
    return (
        <div>
            <img src={cover} alt={title} />
            <Link to={`/movie/${id}`}>{title}</Link>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <p >{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        </div>
    )
}

Movie.prototypeopTypes = {
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,

}

export default Movie;