import PropTypes from "prop-types";
import {
    Link
} from "react-router-dom";

function Movie({ cover, title, genres, summary }) {
    return (
        <div>
            <img src={cover} alt={title} />
            <Link to="/movie">{title}</Link>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

Movie.prototypeopTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,

}

export default Movie;