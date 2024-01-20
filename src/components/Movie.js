import PropTypes from "prop-types";

function Movie({ cover, title, genres, summary }) {
    return (
        <div>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
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